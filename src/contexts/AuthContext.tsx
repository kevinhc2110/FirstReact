import { createContext } from "react";

//Creación de contexto
export type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({
  isAuthenticated: false,
});
