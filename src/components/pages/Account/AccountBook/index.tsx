import React from "react";
import { Outlet } from "react-router";
import { Wrapper } from "../../../ui/wrapper";

export const AccountBook = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};
