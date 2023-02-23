import { useParams } from "react-router-dom";
import useUserBooks from "../../api/useUserBooks";
import { BookType } from "../../../../../types/types";
import { useUserContext } from "../../../../context/userContext";
import { BookElement } from "../../../Books/components/BookElement";
import { PageWrapper } from "../../../../ui/PageWrapper";

const PersonalBooks = () => {
  const { id } = useParams();
  const { user } = useUserContext();
  const { books } = useUserBooks(id as string);

  return books ? (
    <PageWrapper title="Книги">
      <>
        {books.length ? (
          books.map((book: BookType) => (
            <BookElement
              author={book.user.name}
              categories={book.genres.map((genre) => genre.name)}
              annotation={book.description}
              {...book}
              key={book.id}
              isUserBook={Number(id) === user?.id}
            ></BookElement>
          ))
        ) : (
          <h1>Пользователь пока не добавил книги</h1>
        )}
      </>
    </PageWrapper>
  ) : (
    <h1>Loading...</h1>
  );
};

export default PersonalBooks;
