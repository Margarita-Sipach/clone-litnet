import React from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "../../../ui/Wrapper";
import { PageWrapper } from "../../../ui/PageWrapper";

export const Account = () => {
  return (
    <Wrapper>
      <PageWrapper isTop={true}>
        <Outlet />
      </PageWrapper>
    </Wrapper>
  );
};
