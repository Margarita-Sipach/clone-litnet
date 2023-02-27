import { PageWrapper } from "../../../../ui/PageWrapper";
import { Wrapper } from "../../../../ui/Wrapper";
import { BookElement } from "../../components/BookElement";
import useBooks from "../../api/useBooks";
import Spinner from "../../../../ui/Spinner";

export const BooksPage = () => {
  const { data: books, isLoading } = useBooks();
  return (
    <Wrapper>
      <PageWrapper title="Все жанры" isTop={true}>
        {books ? (
          <div className="flex flex-col gap-4">
            {books.map((book) => (
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
            ))}
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
