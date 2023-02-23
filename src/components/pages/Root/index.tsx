import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../modules/Header";
import { Footer } from "../../modules/Footer";

const Root = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
