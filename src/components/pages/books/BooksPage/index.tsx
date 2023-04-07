import { useMemo } from "react";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { BookElement } from "../../../modules/elements/BookElement";
import { Spinner } from "../../../ui/Spinner";
import { useParams } from "react-router-dom";
import { BookType } from "../../../../types/types";
import { useBooks } from "../../../../hooks/books/useBooks";

export const BooksPage = () => {
  const { data, isLoading } = useBooks();
  const { rows: books, count } = useMemo(() => (data ? data : {}), [data]);
  const { genreName } = useParams();
  const filteredBooks = useMemo(() => {
    if (!books) return [];
    return genreName === "all"
      ? books
      : books.filter((book) => {
          return book.genres.map((genre) => genre.name).includes(genreName!);
        });
  }, [books, genreName]);

  return (
    <Wrapper>
      <PageWrapper title={genreName} isTop={true}>
        {filteredBooks ? (
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
          <p>Непредвиденные проблемы</p>
        )}
      </PageWrapper>
    </Wrapper>
  );
};
