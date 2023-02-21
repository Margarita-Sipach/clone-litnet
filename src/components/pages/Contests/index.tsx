import React from "react";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import ContestElement from "../../ui/contest-element";
import { useQuery } from "@tanstack/react-query";
import { fetchContests } from "../../../api/data";
import { createDate, getImagePath, processImage } from "../../../utils/utils";

const Contests = () => {
  const { data: contests, isLoading } = useQuery({
    queryFn: fetchContests,
    queryKey: ["contests"],
  });
  return (
    <Wrapper>
      <PageWrapper title="Конкурсы" isTop={true} isThereSidebar={false}>
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
          <p>loading contests data...</p>
        ) : (
          <p>error loading contests</p>
        )}
      </PageWrapper>
    </Wrapper>
  );
};

export default Contests;
