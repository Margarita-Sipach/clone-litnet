import { useParams } from "react-router-dom";
import useUserBooks from "../../api/useUserBooks";
import { BookType } from "../../../../../types/types";
import { useUserContext } from "../../../../context/userContext";
import { BookElement } from "../../../Books/components/BookElement";
import { PageWrapper } from "../../../../ui/PageWrapper";
import Spinner from "../../../../ui/Spinner";
import MotionWrapper from "../../../../ui/MotionWrapper";

const PersonalBooks = () => {
  const { id } = useParams();
  const { user } = useUserContext();
  const { books, isLoading } = useUserBooks(id as string);
  return (
    <PageWrapper title="Книги">
      {books ? (
        <MotionWrapper>
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
        </MotionWrapper>
      ) : isLoading ? (
        <Spinner className="flex w-full justify-center" />
      ) : (
        <p>Error loading books</p>
      )}
    </PageWrapper>
  );
};

export default PersonalBooks;
