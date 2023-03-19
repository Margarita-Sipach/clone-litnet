import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Wrapper } from "../../../../ui/Wrapper";
import { PageWrapper } from "../../../../ui/PageWrapper";
import { ContestHeader } from "../../components/ContestHeader/";
import useContest from "../../api/useContest";
import { ContestType } from "../../../../../types/types";

type Params = {
  id: string;
};

export type ContestContextType = {
  contest: ContestType;
};

export const ContestPage = () => {
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
