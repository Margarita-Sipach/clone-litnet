import { ChapterType } from "../../../../../types/types";
import { Button } from "../../../../ui/Button";

export interface ReaderContentProps {
  readingView: string;
  chapter: Required<ChapterType>;
  pageNumber: number;
  setPageNumber: (n: number) => void;
}

export const ReaderContent = ({
  readingView,
  chapter,
  pageNumber,
  setPageNumber,
}: ReaderContentProps) => {
  return readingView === "pages" ? (
    <div>
      <div className="mb-2 flex flex-row gap-2 break-all">
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
      <div className="break-all">{chapter.pages[pageNumber].text}</div>
    </div>
  ) : (
    <div>{chapter.pages.map((p) => p.text)}</div>
  );
};
