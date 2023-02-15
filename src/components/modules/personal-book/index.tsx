import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../api/api";
import { BookType } from "../../../types/types";
import { BookElement } from "../../ui/book-element";
import { PageWrapper } from "../../ui/page-wrapper";

export const PersonalBook = () => {
  const { id } = useParams();
  const [books, setBooks] = useState<BookType[] | null>(null);

  useEffect(() => {
    try {
      API.getBooksByUserId(`${id}`).then((response) => {
        if (!response.ok) throw new Error("Something went wrong");
        response.json().then((data) => {
          setBooks(data.rows);
        });
      });
    } catch (error: any) {
      alert(error.message);
    }
  }, [id]);

  return books ? (
    <PageWrapper title="Книги">
      <>
        {books.map((book: BookType) => (
          <BookElement
            key={book.id}
            img={book.img}
            title={book.title}
            author={book.user.name}
            annotation={book.description}
            rating={book.rating}
            categories={[]}
          ></BookElement>
        ))}
      </>
    </PageWrapper>
  ) : (
    <h1>Loading...</h1>
  );
};
