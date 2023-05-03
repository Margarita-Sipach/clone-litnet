import { FC } from "react";
import { useUserContext } from "../../context/userContext";
import { Navigate, useParams } from "react-router-dom";
import { useContest } from "../../../hooks/contests/useContest";
import { Spinner } from "../../ui/Spinner";
import { Router } from "../../router";

export interface AdminProtectedRouteProps {
  children: JSX.Element;
}

export const AdminProtectedRoute: FC<AdminProtectedRouteProps> = ({
  children,
}) => {
  const { user } = useUserContext();

  return user?.role.value === "ADMIN" ? (
    children
  ) : (
    <Navigate to={Router.main} />
  );
};
