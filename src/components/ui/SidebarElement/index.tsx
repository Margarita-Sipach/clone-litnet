import { BookType } from "../../../types/types";
import { useImage } from "../../../hooks";
import cover from "../../../common/assets/images/avatar.png";
import { Link } from "react-router-dom";

interface SidebarElementProps {
  onClick?: () => void;
  book: BookType;
}

export const SidebarElement = ({ book }: SidebarElementProps) => {
  const image = useImage(book);

  return (
    <Link
      to={`books/${book.id}`}
      className="flex w-56 items-start sm:h-20 lg:h-32"
    >
      <img
        src={image}
        alt=""
        className="mr-2 h-full w-3/12 rounded-md object-cover lg:w-2/5"
        onError={(e) => ((e.target as HTMLImageElement).src = cover)}
      />
      <div className="flex w-3/5 flex-col items-start gap-y-1 lg:w-2/3">
        <div className="max-w-full truncate rounded-md bg-slate-200 p-1 text-xs">
          {book.genres[0].name}
        </div>
        <div className="max-w-full truncate text-sm font-bold">
          {book.title}
        </div>
        <div className="max-w-full truncate text-xs">{book.user.name}</div>
      </div>
    </Link>
  );
};
