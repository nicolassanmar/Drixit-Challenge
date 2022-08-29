import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";

const validateJWT = async (jwt: string) => {
  const response = await fetch("/api/v0/authenticate/validate-jwt", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
};

export default function ProtectedRoute({ children }: { children: any }) {
  const jwt = localStorage.getItem("jwt");
  if (!jwt) {
    return <Navigate to="/login" replace />;
  }
  const { isLoading, data } = useQuery(
    ["validate-jwt", jwt],
    () => validateJWT(jwt),
    {
      staleTime: 1000 * 60,
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    console.log("invalid jwt");
    localStorage.removeItem("jwt");
    // TODO: refetch the jwt using a refresh token
    return <Navigate to="/login" replace />;
  }
  return children;
}
