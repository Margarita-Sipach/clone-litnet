import React from "react";
import { Outlet } from "react-router-dom";

const Account = () => {
  return (
    <div className="flex justify-between">
      <Outlet />
      <div className="h-screen ml-auto border border-amber-200">Sidebar</div>
    </div>
  );
};

export default Account;
