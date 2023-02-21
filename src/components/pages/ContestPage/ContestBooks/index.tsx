import React from "react";
import ContestsBook from "../../../ui/contests-book";
import { useBook, useContest } from "../../../../hooks";
import { useParams } from "react-router-dom";

type Params = {
  id: string;
};

const ContestBooks = () => {
  const { id } = useParams();
  const { data: contest, isLoading } = useContest(id!);
  return (
    <div className="lg:mt-4">
      {contest ? (
        <>
          <p className="mb-6 font-medium">
            Работы участников
            <span className="ml-4 rounded-md bg-gray-700 px-3 py-1 text-sm font-medium text-white">
              {contest.books.length}
            </span>
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contest.books.map((book) => (
              <ContestsBook id={book.id} />
            ))}
          </div>
        </>
      ) : isLoading ? (
        <p>loading contest data</p>
      ) : (
        <p>error loading data</p>
      )}
    </div>
  );
};

export default ContestBooks;
