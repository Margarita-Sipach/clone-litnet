import React from "react";
import { Outlet } from "react-router";
import { Wrapper } from "../../../../ui/Wrapper";

export const AccountBook = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};
