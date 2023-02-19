import { PageWrapper } from "../../ui/page-wrapper";
import { Wrapper } from "../../ui/wrapper";
import { BookElement } from "../../ui/book-element";
import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../../../api/data";

export const BooksPage = () => {
  const booksQuery = useQuery({
    queryFn: fetchBooks,
    queryKey: ["books"],
  });
  return (
    <Wrapper>
      {booksQuery.isSuccess && (
        <PageWrapper isTop={true}>
          {booksQuery.data.map((book) => (
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
          ))}
        </PageWrapper>
      )}
    </Wrapper>
  );
};
