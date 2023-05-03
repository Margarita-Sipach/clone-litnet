import { useMemo, useState, useEffect } from "react";
import { useUserContext } from "../../../context/userContext";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Spinner } from "../../../ui/Spinner";
import { BookElement } from "../../../modules/elements/BookElement";
import { useLibrary } from "../../../../hooks/account/useLibrary";
import { Button } from "../../../ui/buttons/Button";
import { useDeleteBookmark } from "../../../../hooks/reader/useDeleteBookmark";
import {
  PageConfig,
  getOffset,
  getPageCount,
} from "../../../../utils/pageUtils";
import { PaginationPanel } from "../../../ui/PaginationPanel";

export const AccountLibrary = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const params = useMemo(
    () => ({
      limit: PageConfig.LIMIT,
      offset: getOffset(currentPage, PageConfig.LIMIT),
    }),
    [currentPage]
  );
  const { user } = useUserContext();
  const { books, count, refetch } = useLibrary(user!.id, params);
  const { mutate: deleteBookmark } = useDeleteBookmark();

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  useEffect(() => {
    refetch();
  }, [params]);

  return books ? (
    <PageWrapper title="Библиотека пользователя">
      {!books.length ? (
        <h1>Пользователь пока не читает книги</h1>
      ) : (
        <div>
          {books.map((book, i) => (
            <div key={i} className="grid grid-cols-[16fr_0.1fr_1fr]">
              <BookElement
                key={book.id}
                author={book.user.name}
                categories={book.genres.map((genre) => genre.name)}
                annotation={book.description}
                {...book}
                authorId={book.userId}
              />
              <div></div>
              <Button
                onClick={() => {
                  deleteBookmark(
                    `${user?.bookmarks.find((b) => b.bookId === book.id)!.id}`,
                    {
                      onSuccess: () => {
                        refetch();
                        setCurrentPage(0);
                      },
                    }
                  );
                }}
              >
                ╳
              </Button>
            </div>
          ))}
          <PaginationPanel
            pageCount={getPageCount(Number(count), PageConfig.LIMIT)}
            onClick={handlePageClick}
            currentPage={currentPage}
          />
        </div>
      )}
    </PageWrapper>
  ) : (
    <Spinner />
  );
};
