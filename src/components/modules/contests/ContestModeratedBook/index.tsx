import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoReload } from "react-icons/io5";
import { Button } from "../../../ui/buttons/Button";
import { useBook } from "../../../../hooks/books/useBook";
import { handleImageError, processImage } from "../../../../utils/utils";
import { Spinner } from "../../../ui/Spinner";
import { Link } from "react-router-dom";
import { Router } from "../../../router";

type ContestModeratedBookProps = {
  id: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ContestModeratedBook: React.FC<ContestModeratedBookProps> = ({
  id,
  onConfirm,
  onCancel,
}) => {
  const { book, isLoading } = useBook(id);

  return (
    <div className="flex gap-4 border p-4">
      {book ? (
        <>
          <Link to={`${Router.absoluteBooks}/${book.id}`}>
            <img
              className="aspect-[2/3] w-[100px] object-contain"
              src={processImage(book.img)}
              onError={handleImageError}
              alt="book"
            />
          </Link>
          <div className="flex flex-col">
            <Link
              to={`${Router.absoluteBooks}/${book.id}`}
              className="font-medium"
            >
              {book.title}
            </Link>
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
            <div className=" flex w-7/12 justify-around pt-3">
              <Button
                size="sm"
                onClick={() => onCancel()}
                className="mt-auto self-start border-0 bg-red-500 hover:bg-red-600"
              >
                ✖
              </Button>
              <Button
                size="sm"
                onClick={() => onConfirm()}
                className="mt-auto self-start border-0 bg-green-500 hover:bg-green-600"
              >
                ✔
              </Button>
            </div>
          </div>
        </>
      ) : isLoading ? (
        <Spinner className="flex w-full justify-center" />
      ) : (
        <p>error loading book data</p>
      )}
    </div>
  );
};
