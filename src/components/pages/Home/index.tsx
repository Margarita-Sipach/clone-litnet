import React from "react";
import { BigSlider } from "../../modules/big-slider";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import { Categories } from "../../modules/categories";
import { ReadOnline } from "../../modules/read-online";

const Home = () => {
  return (
    <div className="flex flex-col w-full justify-between items-center">
      <BigSlider />
      <Wrapper className="flex flex-col gap-y-10">
        <PageWrapper>
          <Categories />
        </PageWrapper>
        <PageWrapper title="Читать онлайн">
          <ReadOnline />
        </PageWrapper>
      </Wrapper>
    </div>
  );
};

export default Home;
