import { ChapterType } from "../../../../../types/types";
import Button from "../../../../ui/Button";

export interface ReaderNavigationProps {
  readingView: string;
  chapter: Required<ChapterType>;
  pageNumber: number;
  setPageNumber: (n: number) => void;
}

export const ReaderNavigation = ({
  readingView,
  chapter,
  pageNumber,
  setPageNumber,
}: ReaderNavigationProps) => {
  return readingView === "pages" ? (
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
  );
};
