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

export const ReaderPage = () => {
  const { user } = useUserContext();
  const { id } = useParams<{ id: string }>();
  const { data: book } = useBook(id!);
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

  return chapter && !bookmarkLoading ? (
    <div className=" grid w-8/12 grid-cols-[3fr_1fr] gap-12">
      <PageWrapper isTop={false}>
        {/* <ReaderHeader title={chapter.title} /> */}
        <h1 className=" mt-28">{chapter.title}</h1>
        <select
          className="w-full border-spacing-1 rounded border border-gray-400 py-2 px-3"
          onClick={(e) => {
            setChapterId((e.target as any).value);
            setPageNumber(0);
          }}
        >
          {book &&
            book.chapters.map((ch) => (
              <option
                key={ch.id}
                value={ch.id}
                selected={chapter.title === ch.title}
              >
                {`Глава ${ch.number}. ${ch.title}`}
              </option>
            ))}
        </select>
        {/* <PageNavigation></PageNavigation> */}
        {user?.readingView === "pages" ? (
          <div>
            <div className="mb-2 flex flex-row gap-2">
              {chapter?.pages.map((p) => (
                <Button
                  key={p.id}
                  className={
                    pageNumber === p.number - 1
                      ? "border-indigo-600 bg-indigo-600"
                      : ""
                  }
                  onClick={() => {
                    setPageNumber(p.number - 1);
                  }}
                >{`${p.number}`}</Button>
              ))}
            </div>
            <div className="">{chapter.pages[pageNumber].text}</div>
          </div>
        ) : (
          <div>{chapter.pages.map((p) => p.text)}</div>
        )}
      </PageWrapper>
      {/* <ReaderSidebar></ReaderSidebar> */}
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
