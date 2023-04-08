import { ChapterType } from "../../../../types/types";
import { Button } from "../../../ui/buttons/Button";

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
    <div className="">
      <div className="mb-2 flex flex-row gap-2 whitespace-pre break-all">
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
      <div className="w-full break-all">{chapter.pages[pageNumber].text}</div>
    </div>
  ) : (
    <p className="w-full break-all">{chapter.pages.map((p) => p.text)}</p>
  );
};
