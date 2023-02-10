import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  id: string;
};

const UserBooks = () => {
  const { id } = useParams<Params>();
  return <div>User (id: {id}) books</div>;
};

export default UserBooks;
