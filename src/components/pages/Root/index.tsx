import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-4">
      <nav className="flex justify-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/info">Info</Link>
        <Link to="/user/testuser">User</Link>
        <Link to="/account">Account</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
