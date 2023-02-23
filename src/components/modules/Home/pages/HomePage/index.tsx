import { useMemo } from "react";
import HeroSection from "../../components/HeroSection";
import { Wrapper } from "../../../../ui/Wrapper";
import { PageWrapper } from "../../../../ui/PageWrapper";
import Categories from "../../../Genres/components/Categories";
import ReadOnline from "../../components/ReadOnline";
import { Slider } from "../../components/Slider";
import { useFetchBooks } from "../../../../../hooks";
import {
  getBooksByComments,
  getBooksByRating,
} from "../../../../../utils/utils";
import { SidebarContainer } from "../../../SidebarContainer";

const BOOK_COUNT = 7;

const HomePage = () => {
  const { books } = useFetchBooks();

  const popularBooks = useMemo(
    () => (books ? getBooksByRating(books, BOOK_COUNT) : []),
    [books]
  );

  const mostCommentedBooks = useMemo(
    () => (books ? getBooksByComments(books, BOOK_COUNT) : []),
    [books]
  );

  return books ? (
    <div className="flex w-full flex-col items-center justify-between overflow-hidden">
      <HeroSection />
      <Wrapper className="grid grid-cols-1 justify-center gap-x-8 md:grid-cols-[2fr_1fr] lg:gap-x-8 xl:gap-x-20">
        <div className="flex flex-col gap-y-10">
          <PageWrapper className="lg:w-full">
            <Categories />
            <div className="flex flex-col gap-16">
              <Slider title="ТОП Книг" books={popularBooks} />
              <Slider
                title="Самые обсуждаемые книги"
                books={mostCommentedBooks}
              />
            </div>
          </PageWrapper>
          <PageWrapper title="Читать онлайн">
            <ReadOnline />
          </PageWrapper>
        </div>
        <SidebarContainer className="" />
      </Wrapper>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default HomePage;
