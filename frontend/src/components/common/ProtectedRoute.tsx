import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  user,
  children,
}: {
  user?: any;
  children: any;
}) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
