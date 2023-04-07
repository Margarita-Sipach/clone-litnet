import React from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";
import { Spinner } from "../../../ui/Spinner";
import { useQuery } from "@tanstack/react-query";
import { BookListType } from "../../../../types/list.types";
import { ContestBook } from "../../../modules/contests/ContestBook";
import { API } from "../../../../api/api";

export const ContestParticipate = () => {
  const { id } = useParams();
  const { user } = useUserContext();
  const { data: books, isLoading } = useQuery<BookListType>({
    queryFn: () => API.getBooksByUserId(user!.id.toString()),
    enabled: !!user,
  });
  return user ? (
    <div>
      <p className="mb-4">Ваши книги</p>
      {books ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {books.rows.map((book) => (
            <ContestBook
              participate={true}
              id={book.id.toString()}
              contestId={id}
            />
          ))}
        </div>
      ) : isLoading ? (
        <Spinner />
      ) : (
        <p>Error loading books</p>
      )}
    </div>
  ) : (
    <p>Вы должны авторизоваться чтобы участвовать в конкурсе</p>
  );
};
