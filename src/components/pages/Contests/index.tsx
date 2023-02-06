import React from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import ContestElement from "../../ui/contest-element";

const mockContests = [
  {
    title: "Contest Name",
    prize:
      "3 победителя получат: выплаты от 20 до 50 тыс. руб.; рекламную поддержку; коммерческий статус.",
    imageUrl: "https://litnet.com/uploads/contests/cover_1675424625.png",
    startDate: new Date("December 17, 1995 03:24:00"),
    endDate: new Date("December 17, 1995 03:24:00"),
    resultsDate: new Date("December 17, 1995 03:24:00"),
  },
  {
    title: "Second Contest",
    prize:
      "3 победителя получат: выплаты от 20 до 50 тыс. руб.; рекламную поддержку; коммерческий статус.",
    imageUrl: "https://litnet.com/uploads/contests/cover_1675424625.png",
    startDate: new Date("December 17, 1995 03:24:00"),
    endDate: new Date("December 17, 1995 03:24:00"),
    resultsDate: new Date("December 17, 1995 03:24:00"),
  },
  {
    title: "Third Contest",
    prize:
      "3 победителя получат: выплаты от 20 до 50 тыс. руб.; рекламную поддержку; коммерческий статус.",
    imageUrl: "https://litnet.com/uploads/contests/cover_1675424625.png",
    startDate: new Date("December 17, 1995 03:24:00"),
    endDate: new Date("December 17, 1995 03:24:00"),
    resultsDate: new Date("December 17, 1995 03:24:00"),
  },
];

const Contests = () => {
  return (
    <Wrapper>
      <PageWrapper title="Конкурсы" isTop={true} isThereSidebar={false}>
        <div className="flex flex-col gap-6">
          {mockContests.map((contest) => (
            <ContestElement
              title={contest.title}
              prize={contest.prize}
              imageUrl={contest.imageUrl}
              startDate={contest.startDate}
              endDate={contest.endDate}
              resultsDate={contest.resultsDate}
            />
          ))}
        </div>
      </PageWrapper>
    </Wrapper>
  );
};

export default Contests;
