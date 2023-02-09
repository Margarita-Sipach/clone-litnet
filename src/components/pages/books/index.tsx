import { PageWrapper } from "../../ui/page-wrapper";
import { Wrapper } from "../../ui/wrapper";
import { BookElement } from "../../ui/book-element";
import { BookElementType } from "../../../types/types";

interface BooksPageProps {
  title: string;
  books: BookElementType[];
}

export const BooksPage = ({ title, books }: BooksPageProps) => {
  return (
    <Wrapper>
      <PageWrapper title={title} isTop={true}>
        {books.map((book) => (
          <BookElement
            img={book.img}
            title={book.title}
            author={book.author}
            categories={book.categories}
            annotation={book.annotation}
            commentAmount={book.commentAmount}
            readAmount={book.readAmount}
            rating={book.rating}
          />
        ))}
      </PageWrapper>
    </Wrapper>
  );
};
