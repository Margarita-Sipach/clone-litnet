import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../../modules/Footer";
import { AdminHeader } from "../AdminHeader";

export const AdminRoot = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white ">
      <AdminHeader />
      <Outlet />
      <Footer />
    </div>
  );
};