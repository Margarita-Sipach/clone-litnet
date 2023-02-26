import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { BookmarkType } from "../../../../types/types";
import { useUserContext } from "../../../context/userContext";
import Button from "../../../ui/Button";
import { PageWrapper } from "../../../ui/PageWrapper";
import { PrimarySelect } from "../../../ui/PrimarySelect";
import useBook from "../../Books/api/useBook";
import { useBookmark } from "../api/useBookmark";
import { useChapter } from "../api/useChapter";
import { usePostBookmark } from "../api/usePostBookmark";
import { ReaderHeader } from "../components/ReaderHeader";
import { ReaderNavigation } from "../components/ReaderNavigation";

export const ReaderPage = () => {
  const { user } = useUserContext();
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading: bookLoading } = useBook(id!);
  const bookmarkId = useMemo(
    () => user?.bookmarks.find((b) => b.bookId === +id!)?.id,
    [id, user]
  );
  const { data: bookmark, isLoading: bookmarkLoading } =
    useBookmark(bookmarkId);
  const [chapterId, setChapterId] = useState(
    bookmark ? bookmark.progress.chapterId : 1
  );
  const chapter = useChapter(chapterId);
  const { mutate } = usePostBookmark();
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    if (
      book &&
      !book?.chapters.find((c) => c.id === bookmark?.progress.chapterId)
    ) {
      setChapterId(book?.chapters[0].id);
    }
  }, [book, bookmark]);

  useEffect(() => {
    setChapterId(bookmark ? bookmark.progress.chapterId : 1);
  }, [bookmark]);

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
        <ReaderNavigation
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
      </PageWrapper>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};
