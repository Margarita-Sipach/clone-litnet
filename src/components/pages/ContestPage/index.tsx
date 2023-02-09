import React from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import { FaTrophy } from "react-icons/fa";
import Button from "../../ui/button";
import ContestsBook from "../../ui/contests-book";

type Params = {
  slug: string;
};

const mockContest = {
  title: "Народная комедия",
  description: "Конкурс на лучшую комедийную историю",
  prize:
    "3 победителя получат: выплаты от 20 до 50 тыс. руб.; шанс на экранизацию",
  books: [
    {
      title: "Book title",
      author: "John Doe",
      img: "https://rust.litnet.com/uploads/covers/220/1675762220_68.png",
      favorites: 5,
      pages: 42,
      genres: ["action", "drama", "kys"],
    },
    {
      title: "Book title",
      author: "John Doe",
      img: "https://rust.litnet.com/uploads/covers/220/1675762220_68.png",
      favorites: 5,
      pages: 42,
      genres: ["action", "drama", "kys"],
    },
    {
      title: "Book title",
      author: "John Doe",
      img: "https://rust.litnet.com/uploads/covers/220/1675762220_68.png",
      favorites: 5,
      pages: 42,
      genres: ["action", "drama", "kys"],
    },
    {
      title: "Book title",
      author: "John Doe",
      img: "https://rust.litnet.com/uploads/covers/220/1675762220_68.png",
      favorites: 5,
      pages: 42,
      genres: ["action", "drama", "kys"],
    },
    {
      title: "Book title",
      author: "John Doe",
      img: "https://rust.litnet.com/uploads/covers/220/1675762220_68.png",
      favorites: 5,
      pages: 42,
      genres: ["action", "drama", "kys"],
    },
  ],
};

const ContestPage = () => {
  const { slug } = useParams<Params>();
  return (
    <Wrapper>
      <PageWrapper isTop={true} isThereSidebar={false}>
        <div
          className="flex aspect-[3.8/1] w-full items-center bg-cover bg-no-repeat py-6 px-8"
          style={{
            background:
              "linear-gradient(rgba(51,51,51,.6), rgba(51,51,51,.6)), url(https://litnet.com/uploads/contests/saver_1671034577.png) center",
          }}
        >
          <div className="flex h-32 flex-1 flex-col sm:h-28  lg:h-32">
            <h3 className="mb-2 text-xl font-medium text-white lg:text-2xl">
              {mockContest.title}
            </h3>
            <p className="mb-2 text-sm text-white md:mb-0 lg:text-base">
              {mockContest.description}
            </p>
            <div className="mt-auto flex gap-4">
              <Button>Правила конкурса</Button>
              <Button
                type="secondary"
                className="border-white text-[#ffffff] hover:text-white"
              >
                {/* wtf? why does text-white not work?*/}
                Участвовать в конкурсе
              </Button>
            </div>
          </div>
          <div className="hidden h-32 flex-1 items-start justify-between rounded border border-white p-6 lg:flex">
            <FaTrophy
              className="grow-1 mr-1 shrink-0 lg:mr-3"
              size="20px"
              color="white"
            />
            <div>
              <p className="mb-2 text-xs uppercase text-white">Приз</p>
              <p className="text-sm text-white">{mockContest.prize}</p>
            </div>
          </div>
        </div>

        <div className="lg:mt-4">
          <p className="mb-6 font-medium">
            Работы участников
            <span className="ml-4 rounded-md bg-gray-700 px-3 py-1 text-sm font-medium text-white">
              {mockContest.books.length}
            </span>
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mockContest.books.map((book) => (
              <ContestsBook
                title={book.title}
                author={book.author}
                img={book.img}
                favorites={book.favorites}
                pages={book.pages}
                genres={book.genres}
              />
            ))}
          </div>
        </div>
      </PageWrapper>
    </Wrapper>
  );
};

export default ContestPage;
