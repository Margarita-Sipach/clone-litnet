import React from "react";
import { Outlet, useParams } from "react-router-dom";

type Params = {
  slug: string;
};

const User = () => {
  const { slug } = useParams<Params>();
  return (
    <div>
      <h1>User "{slug}" Info</h1>
      <Outlet />
    </div>
  );
};

export default User;
