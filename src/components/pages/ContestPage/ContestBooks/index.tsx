import React from "react";
import ContestsBook from "../../../ui/contests-book";

type Book = {
  title: string;
  author: string;
  img: string;
  favorites: number;
  pages: number;
  genres: string[];
};

const mockBooks: Book[] = [
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
];

const ContestBooks = () => {
  return (
    <div className="lg:mt-4">
      <p className="mb-6 font-medium">
        Работы участников
        <span className="ml-4 rounded-md bg-gray-700 px-3 py-1 text-sm font-medium text-white">
          {mockBooks.length}
        </span>
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mockBooks.map((book) => (
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
  );
};

export default ContestBooks;
