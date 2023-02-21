import { PageWrapper } from "../../ui/page-wrapper";
import { Wrapper } from "../../ui/wrapper";
import { BookElement } from "../../ui/book-element";
import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../../../api/data";

export const BooksPage = () => {
  const booksQuery = useQuery({
    queryFn: fetchBooks,
    queryKey: ["allBooks"],
  });
  const { data: books, isLoading } = booksQuery;
  return (
    <Wrapper>
      <PageWrapper isTop={true}>
        {books ? (
          books.map((book) => (
            <BookElement
              id={book.id}
              key={book.id}
              img={book.img}
              title={book.title}
              author={book.user.name}
              annotation={book.description}
              rating={book.rating}
              categories={book.genres.map((genre) => genre.name)}
            />
          ))
        ) : isLoading ? (
          <p>loading books...</p>
        ) : (
          <p>error loading books</p>
        )}
      </PageWrapper>
    </Wrapper>
  );
};
