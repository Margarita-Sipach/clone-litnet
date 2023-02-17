import { useMemo } from "react";
import { BigSlider } from "../../modules/big-slider";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import { Categories } from "../../modules/categories";
import { ReadOnline } from "../../modules/read-online";
import { Slider } from "../../modules/slider";
import { useFetchBooks, useFetchGenres } from "../../../hooks";
import { getBooksByComments, getBooksByRating } from "../../../utils/utils";

const books = [
  {
    img: "https://rust.litnet.com/uploads/covers/220/1661755951_16.png",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
  {
    img: "https://rust.litnet.com/uploads/covers/220/1674196090_78.jpg",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
  {
    img: "https://rust.litnet.com/uploads/covers/220/1674289298_41.png",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
  {
    img: "https://rust.litnet.com/uploads/covers/220/1656301239_95.jpg",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
  {
    img: "https://rust.litnet.com/uploads/covers/220/1675435084_11.jpg",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
  {
    img: "https://rust.litnet.com/uploads/covers/220/1668452069_98.jpg",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
  {
    img: "https://rust.litnet.com/uploads/covers/220/1674287397_15.jpg",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
  {
    img: "https://rust.litnet.com/uploads/covers/220/1616997270_93.jpg",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
];

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
      <Wrapper className="flex flex-col gap-y-10">
        <PageWrapper>
          <Categories/>
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
      </Wrapper>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
