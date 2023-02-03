import React from "react";
import { Outlet } from "react-router-dom";

const Info = () => {
  return (
    <div>
      <h1>Info Page</h1>
      <Outlet />
    </div>
  );
};

export default Info;
