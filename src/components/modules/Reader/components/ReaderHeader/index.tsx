import { BookType, ChapterType, DetailedBookType } from "../../../../../types/types";

export interface ReaderHeaderProps {
  chapter: Required<ChapterType>;
  book: DetailedBookType;
  setPageNumber: (n: number) => void;
  setChapterId: (n: number) => void;
}

export const ReaderHeader = ({
  chapter,
  book,
  setPageNumber,
  setChapterId,
}: ReaderHeaderProps) => {
  return (
    <>
      <h1 className="mt-28 text-xl font-semibold">{chapter.title}</h1>
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
    </>
  );
};
