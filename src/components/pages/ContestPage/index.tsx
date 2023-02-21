import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import ContestHeader from "../../modules/contest-header";
import { useContest } from "../../../hooks";
import { ContestType } from "../../../types/types";

type Params = {
  id: string;
};

export type ContestContextType = {
  contest: ContestType;
};

const ContestPage = () => {
  const { id } = useParams<Params>();
  const { data: contest, isLoading } = useContest(id!);
  return (
    <Wrapper>
      <PageWrapper isTop={true}>
        {contest ? (
          <ContestHeader id={id!} />
        ) : isLoading ? (
          <p>loading contest data...</p>
        ) : (
          <p>error loading contest</p>
        )}
        <Outlet context={{ contest }} />
      </PageWrapper>
    </Wrapper>
  );
};

export default ContestPage;
