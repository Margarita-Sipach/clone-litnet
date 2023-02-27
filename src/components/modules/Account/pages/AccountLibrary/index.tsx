import React from "react";
import { useUserContext } from "../../../../context/userContext";
import { PageWrapper } from "../../../../ui/PageWrapper";
import Spinner from "../../../../ui/Spinner";
import { BookElement } from "../../../Books/components/BookElement";
import { useLibrary } from "../../api/useLibrary";

const AccountLibrary = () => {
  const { user } = useUserContext();
  const { data: library, isLoading, isError } = useLibrary(user!.id);
  return isLoading && !isError ? (
    <Spinner />
  ) : (
    <PageWrapper title="Библиотека пользователя">
      {library!.map((book) => (
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
  );
};

export default AccountLibrary;
