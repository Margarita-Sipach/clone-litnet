import React from "react";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Table } from "../../../ui/Table";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { useContests } from "../../../../hooks/contests/useContests";
import { Spinner } from "../../../ui/Spinner";

export const AdminContestsPage = () => {
	const { contests, isLoading } = useContests();

  return (
    <div className="flex w-full flex-col items-center justify-between overflow-hidden">
      <Wrapper className="">
        <PageWrapper isTop={true} title="Конкурсы" className="w-full text-xl">
					{contests ? (
            <Table header={["Конкурс", "Статус"]} data={contests} type="contest" />
          ) : isLoading ? (
            <Spinner className="flex w-full items-center justify-center" />
          ) : (
            <p>Непредвиденные проблемы</p>
          )}
        </PageWrapper>
      </Wrapper>
    </div>
  );
};
