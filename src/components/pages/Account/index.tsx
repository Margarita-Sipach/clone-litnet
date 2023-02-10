import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";

const Account = () => {
  // user id will be stored somewhere in context
  const userId = 1;
  return (
    <Wrapper>
      <PageWrapper isTop={true} isThereSidebar={false}>
        <h1>My account</h1>
        <nav className="flex gap-4">
          <Link className="font-medium text-blue-500" to={`/users/${userId}`}>
            Моя страница
          </Link>
          <Link className="font-medium text-blue-500" to="edit">
            Редактировать
          </Link>
        </nav>
        <Outlet />
      </PageWrapper>
    </Wrapper>
  );
};

export default Account;
