import React from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "../../ui/wrappers/Wrapper";
import { PageWrapper } from "../../ui/wrappers/PageWrapper";

export const Account = () => {
  return (
    <Wrapper>
      <PageWrapper isTop={true}>
        <Outlet />
      </PageWrapper>
    </Wrapper>
  );
};
