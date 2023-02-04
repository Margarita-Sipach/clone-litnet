import { BigSlider } from "../../modules/big-slider";
import { Categories } from "../../modules/categories";
import { ReadOnline } from "../../modules/read-online";
import { PageWrapper } from "../../ui/page-wrapper";
import { Wrapper } from "../../ui/wrapper";

export const MainPage = () => {
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
