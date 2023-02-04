import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../modules/header";
import { Footer } from "../../modules/footer";

const Root = () => {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-white ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
