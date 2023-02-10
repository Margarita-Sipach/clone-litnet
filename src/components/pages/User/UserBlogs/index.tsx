import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  id: string;
};

const UserBlogs = () => {
  const { id } = useParams<Params>();
  return <div>User (id: {id}) blogs</div>;
};

export default UserBlogs;
