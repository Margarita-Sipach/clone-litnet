import React from "react";
import { Outlet } from "react-router";
import { Wrapper } from "../../../../ui/wrappers/Wrapper";

export const AccountBook = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};
