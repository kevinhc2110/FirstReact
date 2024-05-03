import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/UseAuthProvider";

//Estado ruta protegida
export default function RouteProtected() {
  const auth = useAuth();
  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
