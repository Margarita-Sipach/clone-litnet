import { useMemo } from "react";
import HeroSection from "../../modules/home/HeroSection";
import { Wrapper } from "../../ui/wrappers/Wrapper";
import { PageWrapper } from "../../ui/wrappers/PageWrapper";
import { ReadOnline } from "../../modules/home/ReadOnline";
import { Slider } from "../../modules/home/Slider";
import { getBooksByComments, getBooksByRating } from "../../../utils/utils";
import { Sidebar } from "../../modules/Sidebar";
import { useBooks } from "../../../hooks/books/useBooks";

const BOOK_COUNT = 7;

export const HomePage = () => {
  const { books } = useBooks();

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
        <Sidebar className="" />
      </Wrapper>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};
