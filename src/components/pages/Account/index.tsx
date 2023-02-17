import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import { useUserContext } from "../../context/userContext";
import { Router } from "../../router";

const Account = () => {
  const { user } = useUserContext();
  return (
    <Wrapper>
      <PageWrapper isTop={true} isThereSidebar={false}>
        <h1>My account</h1>
        <nav className="flex gap-4">
          <Link
            className="font-medium text-blue-500"
            to={`${Router.users}/${user?.id}`}
          >
            Моя страница
          </Link>
          <Link className="font-medium text-blue-500" to={Router.edit}>
            Редактировать
          </Link>
          <Link className="font-medium text-blue-500" to={Router.editPassword}>
            Сменить пароль
          </Link>
        </nav>
        <Outlet />
      </PageWrapper>
    </Wrapper>
  );
};

export default Account;
