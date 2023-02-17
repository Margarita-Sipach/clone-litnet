import { FC } from "react";
import { Navigate } from "react-router-dom";
import { Router } from "../router";
import { useUserContext } from "./userContext";

export interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to={Router.login} />;
  }

  return children;
};
