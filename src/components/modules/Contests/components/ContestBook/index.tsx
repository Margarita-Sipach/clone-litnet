import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { IoReload } from "react-icons/io5";
import { Button } from "../../../../ui/Button";
import useBook from "../../../Books/api/useBook";
import { handleImageError, processImage } from "../../../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../../../ui/Spinner";
import useParticipateInContest from "../../api/useParticipateInContest";
import { notifyError, notifySuccess } from "../../../../../hooks";

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
  const { data: book, isLoading } = useBook(id);
  const navigate = useNavigate();
  const mutation = useParticipateInContest(contestId!, id);
  useEffect(() => {
    if (mutation.status === "success") {
      notifySuccess("Книга успешно зарегистрирована на конкурс");
    } else if (mutation.status === "error") {
      notifyError(mutation.error.response!.data.message);
    }
  }, [mutation.status]);

  return (
    <div className="flex gap-4 border p-4">
      {book ? (
        <>
          <img
            className="aspect-[2/3] w-[100px] object-contain"
            src={processImage(book.img)}
            onError={handleImageError}
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
            {participate && mutation.isLoading ? (
              <Spinner className="mt-auto self-start" />
            ) : (
              <Button
                size="sm"
                onClick={() => {
                  if (participate) {
                    mutation.mutate();
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
