import React, { useState, useEffect, useMemo } from "react";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { ContestElement } from "../../../modules/elements/ContestElement";
import { createDate, processImage } from "../../../../utils/utils";
import { Spinner } from "../../../ui/Spinner";
import { useContests } from "../../../../hooks/contests/useContests";
import { PaginationPanel } from "../../../ui/PaginationPanel";
import {
  PageConfig,
  getOffset,
  getPageCount,
} from "../../../../utils/pageUtils";

export const Contests = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const params = useMemo(
    () => ({
      limit: PageConfig.LIMIT,
      offset: getOffset(currentPage, PageConfig.LIMIT),
    }),
    [currentPage]
  );
  const { contests, count, refetch, isLoading } = useContests(params);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    refetch();
  }, [params]);

  return (
    <Wrapper>
      <PageWrapper title="Конкурсы" isTop={true}>
        {contests ? (
          <div className="flex flex-col gap-6">
            {contests.map((contest) => (
              <ContestElement
                key={contest.id}
                id={contest.id}
                title={contest.title}
                prize={contest.prize as string}
                imageUrl={processImage(contest.img)}
                startDate={createDate(contest.createdAt)}
                endDate={createDate(contest.date)}
                resultsDate={createDate(contest.date)}
                booksAmount={contest.contestApplications.length}
              />
            ))}
            <PaginationPanel
              pageCount={getPageCount(count, PageConfig.LIMIT)}
              onClick={handlePageClick}
              currentPage={currentPage}
            />
          </div>
        ) : isLoading ? (
          <Spinner className="flex w-full justify-center" />
        ) : (
          <p>error loading contests</p>
        )}
      </PageWrapper>
    </Wrapper>
  );
};
