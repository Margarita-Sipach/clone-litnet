import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoReload } from "react-icons/io5";
import { Button } from "../../../ui/buttons/Button";
import { useBook } from "../../../../hooks/books/useBook";
import { handleImageError, processImage } from "../../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../../ui/Spinner";
import { useParticipateInContest } from "../../../../hooks/contests/useParticipateInContest";

type ContestBookProps = {
  id: string;
  contestId?: string;
  participate?: boolean;
};

export const ContestBook: React.FC<ContestBookProps> = ({
  id,
  contestId,
  participate = false,
}) => {
  const { book, isLoading } = useBook(id);
  const navigate = useNavigate();
  const { addBook, isLoading: isAddBookLoading } = useParticipateInContest(
    contestId!,
    id
  );

  return (
    <div className="flex gap-4 border p-4">
      {book ? (
        <>
          <img
            className="aspect-[2/3] w-[100px] object-contain"
            src={processImage(book.img)}
            onError={handleImageError}
            alt="book"
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
            {participate && isAddBookLoading ? (
              <Spinner className="mt-auto self-start" />
            ) : (
              <Button
                size="sm"
                onClick={() => {
                  if (participate) {
                    addBook();
                  } else {
                    navigate(`/books/${book.id}`);
                  }
                }}
                className="mt-auto self-start"
              >
                {participate ? "Участвовать" : "Читать"}
              </Button>
            )}
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
