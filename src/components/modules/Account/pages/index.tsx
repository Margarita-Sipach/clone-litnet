import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Wrapper } from "../../../ui/Wrapper";
import { PageWrapper } from "../../../ui/PageWrapper";
import { useUserContext } from "../../../context/userContext";
import { Router } from "../../../router";

const Account = () => {
  const { user } = useUserContext();
  return (
    <Wrapper>
      <PageWrapper isTop={true}>
        <h1 className="text-3xl font-medium">Мой аккаунт</h1>
        <nav className="flex gap-4 border-blue-400 pb-2">
          <Link
            className="font-medium text-blue-500 hover:text-blue-800"
            to={`${Router.users}/${user?.id}`}
          >
            Моя страница
          </Link>
          <Link
            className="font-medium text-blue-500 hover:text-blue-800"
            to={Router.edit}
          >
            Редактировать
          </Link>
          <Link
            className="font-medium text-blue-500 hover:text-blue-800"
            to={Router.editPassword}
          >
            Сменить пароль
          </Link>
        </nav>
        <Outlet />
      </PageWrapper>
    </Wrapper>
  );
};

export default Account;
