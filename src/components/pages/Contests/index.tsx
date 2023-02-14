import React from "react";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import ContestElement from "../../ui/contest-element";

const mockContests = [
  {
    title: "Contest Name",
    prize:
      "3 победителя получат: выплаты от 20 до 50 тыс. руб.; рекламную поддержку; коммерческий статус.",
    imageUrl: "https://litnet.com/uploads/contests/cover_1675424625.png",
    startDate: "03 февр. 2023",
    endDate: "03 июн. 2023",
    resultsDate: "03 июл. 2023",
  },
  {
    title: "Second Contest",
    prize:
      "3 победителя получат: выплаты от 20 до 50 тыс. руб.; рекламную поддержку; коммерческий статус.",
    imageUrl: "https://litnet.com/uploads/contests/cover_1675424625.png",
    startDate: "03 февр. 2023",
    endDate: "03 июн. 2023",
    resultsDate: "03 июл. 2023",
  },
  {
    title: "Third Contest",
    prize:
      "3 победителя получат: выплаты от 20 до 50 тыс. руб.; рекламную поддержку; коммерческий статус.",
    imageUrl: "https://litnet.com/uploads/contests/cover_1675424625.png",
    startDate: "03 февр. 2023",
    endDate: "03 июн. 2023",
    resultsDate: "03 июл. 2023",
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
