import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: any }) {
  if (!localStorage.getItem("jwt")) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
