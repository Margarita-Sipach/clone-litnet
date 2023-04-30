import { FC } from "react";
import { Navigate } from "react-router-dom";
import { Router } from "../router";
import { useUserContext } from "../context/userContext";

export interface UserProtectedRouteProps {
  children: JSX.Element;
}

export const UserProtectedRoute: FC<UserProtectedRouteProps> = ({
  children,
}) => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to={Router.login} />;
  }

  return children;
};
