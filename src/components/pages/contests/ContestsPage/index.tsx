import React from "react";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { ContestElement } from "../../../modules/elements/ContestElement";
import { createDate, processImage } from "../../../../utils/utils";
import { Spinner } from "../../../ui/Spinner";
import useContests from "../../../../api/contests/useContests";

export const Contests = () => {
  const { data: contests, isLoading } = useContests();
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
                booksAmount={contest.books.length}
              />
            ))}
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
