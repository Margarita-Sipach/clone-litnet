import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { Wrapper } from "../../ui/Wrapper";
import { PageWrapper } from "../../ui/PageWrapper";

type Params = {
  id: string;
};

const User = () => {
  const { id } = useParams<Params>();
  return (
    <Wrapper>
      <PageWrapper isTop={true}>
        <h1>User (id: {id}) Info</h1>
        <nav className="flex gap-4">
          <Link className="font-medium text-blue-500" to={`/users/${id}/about`}>
            Обо мне
          </Link>
          <Link className="font-medium text-blue-500" to={`/users/${id}/blogs`}>
            Блог
          </Link>
          <Link className="font-medium text-blue-500" to={`/users/${id}/books`}>
            Книги
          </Link>
          <Link className="font-medium text-blue-500" to="/account">
            Мой аккаунт
          </Link>
        </nav>
        <Outlet />
      </PageWrapper>
    </Wrapper>
  );
};

export default User;
