import React from "react";
import { useUserContext } from "../../../context/userContext";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Spinner } from "../../../ui/Spinner";
import { BookElement } from "../../../modules/elements/BookElement";
import { useLibrary } from "../../../../api/account/useLibrary";

export const AccountLibrary = () => {
  const { user } = useUserContext();
  const { data: library } = useLibrary(user!.id);
  return library ? (
    <PageWrapper title="Библиотека пользователя">
      {library.map((book) => (
        <BookElement
          key={book.id}
          author={book.user.name}
          categories={book.genres.map((genre) => genre.name)}
          annotation={book.description}
          {...book}
          authorId={book.userId}
        ></BookElement>
      ))}
    </PageWrapper>
  ) : (
    <Spinner />
  );
};
