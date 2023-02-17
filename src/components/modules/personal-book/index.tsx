import { useParams } from "react-router-dom";
import { useFetchUserBooks } from "../../../hooks";
import { BookType } from "../../../types/types";
import { BookElement } from "../../ui/book-element";
import { PageWrapper } from "../../ui/page-wrapper";

export const PersonalBook = () => {
  const { id } = useParams();
  const { books } = useFetchUserBooks(id as string);

  return books ? (
    <PageWrapper title="Книги">
      <>
        {books.length ? (
          books.map((book: BookType) => (
            <BookElement
              key={book.id}
              img={book.img}
              title={book.title}
              author={book.user.name}
              annotation={book.description}
              rating={book.rating}
              categories={[]}
              isUserBook={true}
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
