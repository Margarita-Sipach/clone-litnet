import React from "react";
import { Wrapper } from "../../../../ui/Wrapper";
import { PageWrapper } from "../../../../ui/PageWrapper";
import ContestElement from "../../components/ContestElement/";
import useContests from "../../api/useContests";
import {
  createDate,
  getImagePath,
  processImage,
} from "../../../../../utils/utils";
import Spinner from "../../../../ui/Spinner";

const Contests = () => {
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
                imageUrl={processImage(getImagePath(contest.img))}
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

export default Contests;
