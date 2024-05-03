import { createBrowserRouter } from "react-router-dom";
import { LoginContainer } from "../pages/login/LoginPage";
import RouteProtected from "./RouterProtected";
import App from "../App";

//Rutas
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginContainer />,
  },
  {
    path: "/",
    element: <RouteProtected />,
    children: [
      {
        path: "/dashboard",
        element: <App />,
      },
    ],
  },
]);
