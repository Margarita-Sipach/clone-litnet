import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  id: string;
};

const UserAbout = () => {
  const { id } = useParams<Params>();
  console.log(id);
  return <div>About user (id: {id})</div>;
};

export default UserAbout;