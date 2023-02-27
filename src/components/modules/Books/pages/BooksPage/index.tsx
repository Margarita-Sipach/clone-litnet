import { PageWrapper } from "../../../../ui/PageWrapper";
import { Wrapper } from "../../../../ui/Wrapper";
import { BookElement } from "../../components/BookElement";
import useBooks from "../../api/useBooks";
import Spinner from "../../../../ui/Spinner";
import { useParams } from "react-router-dom";
import { BookType } from "../../../../../types/types";

export const BooksPage = () => {
  const { data: books, isLoading } = useBooks();
  const { genreName } = useParams();
  let filteredBooks: BookType[];
  if (books) {
    filteredBooks =
      genreName === "all"
        ? books
        : books.filter((book) => {
            return book.genres.map((genre) => genre.name).includes(genreName!);
          });
    console.log(filteredBooks);
  }

  return (
    <Wrapper>
      <PageWrapper title={genreName} isTop={true}>
        {books ? (
          <div className="flex flex-col gap-4">
            {filteredBooks!.length > 0 ? (
              filteredBooks!.map((book) => (
                <BookElement
                  id={book.id}
                  key={book.id}
                  img={book.img}
                  title={book.title}
                  author={book.user.name}
                  authorId={book.userId}
                  annotation={book.description}
                  rating={book.rating}
                  categories={book.genres.map((genre) => genre.name)}
                />
              ))
            ) : (
              <p>Книги не найдены</p>
            )}
          </div>
        ) : isLoading ? (
          <Spinner className="flex w-full items-center justify-center" />
        ) : (
          <p>error loading books</p>
        )}
      </PageWrapper>
    </Wrapper>
  );
};
