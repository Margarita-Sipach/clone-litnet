import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { Button } from "../../ui/buttons/Button";
import { PageWrapper } from "../../ui/wrappers/PageWrapper";
import useBook from "../../../hooks/books/useBook";
import { useBookmark } from "../../../api/reader/useBookmark";
import { useChapter } from "../../../api/reader/useChapter";
import { usePostBookmark } from "../../../api/reader/usePostBookmark";
import { ReaderContent } from "../../modules/reader/PageNavigation";
import { PrimaryLink } from "../../ui/PrimaryLink";
import { Router } from "../../router";
import { Spinner } from "../../ui/Spinner";
import { ReaderHeader } from "../../modules/reader/ReaderHeader";

export const ReaderPage = () => {
  const { user } = useUserContext();
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading: bookLoading } = useBook(id!);
  const bookmarkId = useMemo(
    () =>
      user?.bookmarks
        ? user?.bookmarks.find((b) => b.bookId === +id!)?.id
        : undefined,
    [id, user]
  );
  const { data: bookmark, isLoading: bookmarkLoading } =
    useBookmark(bookmarkId);
  const [chapterId, setChapterId] = useState(
    bookmark ? bookmark.progress.chapterId : 1
  );
  const [pageNumber, setPageNumber] = useState(0);
  const chapter = useChapter(chapterId);
  const { mutate } = usePostBookmark();

  useEffect(() => {
    if (
      book &&
      !book?.chapters.find((c) => c.id === bookmark?.progress.chapterId)
    ) {
      setChapterId(() => book?.chapters[0].id);
    } else {
      setChapterId(bookmark ? bookmark.progress.chapterId : 1);
    }
  }, [book, bookmark]);

  useEffect(() => {
    setPageNumber(
      chapter
        ? (chapter.pages.find((p) => p.id === bookmark?.progress.pageId)
            ?.number || 1) - 1
        : 0
    );
  }, [chapter, bookmark]);

  return chapter && !bookmarkLoading && !bookLoading ? (
    <div className=" grid w-8/12 grid-cols-[3fr_1fr] gap-12">
      <PageWrapper isTop={false}>
        <ReaderHeader
          chapter={chapter}
          book={book!}
          setChapterId={setChapterId}
          setPageNumber={setPageNumber}
        />
        <ReaderContent
          readingView={user?.readingView as string}
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          chapter={chapter}
        />
      </PageWrapper>
      <PageWrapper isTop={true}>
        <Button
          onClick={() =>
            mutate({
              userId: user!.id,
              bookId: +id!,
              chapterId,
              pageId:
                chapter.pages.find((p) => p.number === pageNumber + 1)?.id || 1,
            })
          }
        >
          Добавить закладку
        </Button>
        <div className=" grid-rows mt-8 grid gap-3">
          <div className="pb-0 font-semibold">Текущий режим чтения: </div>
          <div>
            Главы {user?.readingView === "pages" ? "" : "не"} разбиты на
            страницы
          </div>
          <PrimaryLink path={Router.edit} className={"text-center"}>
            Изменить
          </PrimaryLink>
        </div>
      </PageWrapper>
    </div>
  ) : (
    <Spinner className="mt-28 flex w-full justify-center" />
  );
};
