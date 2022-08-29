import { useQuery } from "react-query";
import { Navigate, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { useEffect } from "react";

import { jwtAtom } from "../../store";
import Spinner from "./Spinner";

const validateJWT = async (jwt: string) => {
  const response = await fetch("/api/v0/authenticate/validate", {
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
  const [jwt, setjwt] = useAtom(jwtAtom);
  const navigate = useNavigate();
  useEffect(() => {
    // if the user has no jwt stored, redirect to the login page
    if (!jwt) {
      navigate("/login");
    }
  }, []);
  const { isLoading, data } = useQuery(
    ["validate-jwt", jwt],
    () => validateJWT(jwt),
    {
      staleTime: 1000 * 60 * 10,
    }
  );
  if (isLoading) {
    return <Spinner />;
  }
  if (!data) {
    console.log("invalid jwt");
    setJwt("");
    // TODO: refetch the jwt using a refresh token
    navigate("/login");
    return;
  }
  return children;
}
