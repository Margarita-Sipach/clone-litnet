import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import ContestHeader from "../../modules/contest-header";

type Params = {
  slug: string;
};

const mockContest = {
  title: "Народная комедия",
  description: "Конкурс на лучшую комедийную историю",
  prize:
    "3 победителя получат: выплаты от 20 до 50 тыс. руб.; шанс на экранизацию",
  image: "https://litnet.com/uploads/contests/saver_1671034577.png",
};

const ContestPage = () => {
  const { slug } = useParams<Params>();
  return (
    <Wrapper>
      <PageWrapper isTop={true}>
        <ContestHeader
          title={mockContest.title}
          description={mockContest.description}
          prize={mockContest.prize}
          image={mockContest.image}
        />
        <Outlet />
      </PageWrapper>
    </Wrapper>
  );
};

export default ContestPage;
