import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoReload } from "react-icons/io5";
import Button from "../button";
import { useBook } from "../../../hooks";
import { processImage } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";

type ContestBookProps = {
  id: string;
};

const ContestsBook: React.FC<ContestBookProps> = ({ id }) => {
  const { data: book, isLoading } = useBook(id);
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 border p-4">
      {book ? (
        <>
          <img
            className="aspect-[2/3] w-[100px] object-contain"
            src={processImage(book.img)}
            alt="book image"
          />
          <div className="flex flex-col">
            <p className="font-medium">{book.title}</p>
            <p className="mb-2 text-xs text-gray-500">{book.user.name}</p>
            <div className="mb-2 flex gap-4">
              <div className="flex items-center gap-1">
                <AiFillStar />
                <p className="text-xs">{book.rating}</p>
              </div>
              <div className="flex items-center gap-1">
                <IoReload size="14px" />
                <p className="text-xs">{book.chapters.length}</p>
              </div>
            </div>
            <p className="text-xs text-gray-600">
              <span className="font-medium">
                {`В тексте есть: ${book.genres
                  .map((genre) => genre.name)
                  .join(", ")}`}
              </span>
            </p>
            <Button
              onClick={() => navigate(`/books/${book.id}`)}
              className="mt-auto self-start"
            >
              Читать
            </Button>
          </div>
        </>
      ) : isLoading ? (
        <p>loading book data...</p>
      ) : (
        <p>error loading book data</p>
      )}
    </div>
  );
};

export default ContestsBook;
