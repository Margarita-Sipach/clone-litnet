import { useEffect, useMemo, useState } from "react";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { BookElement } from "../../../modules/elements/BookElement";
import { Spinner } from "../../../ui/Spinner";
import { useParams } from "react-router-dom";
import { useBooks } from "../../../../hooks/books/useBooks";
import { PaginationPanel } from "../../../ui/PaginationPanel";
import {
  PageConfig,
  getOffset,
  getPageCount,
} from "../../../../utils/pageUtils";

export const BooksPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const params = useMemo(
    () => ({
      limit: PageConfig.LIMIT,
      offset: getOffset(currentPage, PageConfig.LIMIT),
    }),
    [currentPage]
  );
  const { books, count, refetch, isLoading } = useBooks(params);
  const { genreName } = useParams();

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    refetch();
  }, [params]);

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
            <PaginationPanel
              pageCount={getPageCount(Number(count), PageConfig.LIMIT)}
              onClick={handlePageClick}
              currentPage={currentPage}
            />
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
