import { useMemo } from "react";
import { BigSlider } from "../../modules/big-slider";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import { Categories } from "../../modules/categories";
import { ReadOnline } from "../../modules/read-online";
import { Slider } from "../../modules/slider";
import { useFetchBooks, useFetchGenres } from "../../../hooks";
import { getBooksByComments, getBooksByRating } from "../../../utils/utils";
import { SidebarContainer } from "../../modules/sibebar-container";

const BOOK_COUNT = 7;

const Home = () => {
  const { genres } = useFetchGenres();
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
      <BigSlider />
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
            <ReadOnline genres={genres} />
          </PageWrapper>
        </div>
        <SidebarContainer className="" />
      </Wrapper>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
