import { BookType } from "../../../../types/types";
import cover from "../../../../common/assets/images/avatar.png";
import { Link } from "react-router-dom";
import { processImage } from "../../../../utils/utils";

interface SliderElementProps {
  onClick?: () => void;
  book: BookType;
}

export const SliderElement = ({ book }: SliderElementProps) => {
  return (
    <Link
      to={`books/${book.id}`}
      className="flex w-28 flex-col items-start lg:w-40"
    >
      <img
        src={processImage(book.img)}
        alt=""
        className="mb-3 h-40 w-full rounded-md object-cover lg:h-60"
        onError={(e) => ((e.target as HTMLImageElement).src = cover)}
      />
      <div className="mb-1 flex max-w-full gap-x-2 truncate">
        {book.genres.map((item, i) => (
          <div key={i} className="rounded-md bg-slate-200 p-1 text-sm">
            {item.name}
          </div>
        ))}
      </div>
      <div className="mb-1 max-w-full truncate text-base font-bold">
        {book.title}
      </div>
      <div className="max-w-full truncate text-sm">{book.user.name}</div>
    </Link>
  );
};
