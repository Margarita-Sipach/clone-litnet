import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { BookType } from "../../../../../types/types";
import { useUserContext } from "../../../../context/userContext";
import { BookElement } from "../../../../modules/elements/BookElement";
import { PageWrapper } from "../../../../ui/wrappers/PageWrapper";
import { Spinner } from "../../../../ui/Spinner";
import { MotionWrapper } from "../../../../ui/wrappers/MotionWrapper";
import { useFetchUserBooks } from "../../../../../hooks/account/useUserBooks";
import { PaginationPanel } from "../../../../ui/PaginationPanel";
import {
  PageConfig,
  getOffset,
  getPageCount,
} from "../../../../../utils/pageUtils";

export const PersonalBooks = () => {
  const { id } = useParams();
  const { user } = useUserContext();
  const [currentPage, setCurrentPage] = useState(0);
  const params = useMemo(
    () => ({
      limit: PageConfig.LIMIT,
      offset: getOffset(currentPage, PageConfig.LIMIT),
    }),
    [currentPage]
  );
  const { books, count, refetch, isLoading } = useFetchUserBooks(
    id as string,
    params
  );

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };


  useEffect(() => {
    refetch();
  }, [params]);

  return (
    <PageWrapper title="Книги">
      {books ? (
        <MotionWrapper>
          {books.length ? (
            <div className="flex flex-col gap-4">
              {books.map((book: BookType) => (
                <BookElement
                  author={book.user.name}
                  categories={book.genres.map((genre) => genre.name)}
                  annotation={book.description}
                  {...book}
                  authorId={book.userId}
                  key={book.id}
                  isUserBook={Number(id) === user?.id}
                ></BookElement>
              ))}
              <PaginationPanel
                pageCount={getPageCount(Number(count), PageConfig.LIMIT)}
                onClick={handlePageClick}
                currentPage={currentPage}
              />
            </div>
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
