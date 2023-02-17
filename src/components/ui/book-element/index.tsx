import { ElementWrapper } from "../element-wrapper";
import { AiFillStar } from "react-icons/ai";
import { Icon } from "../icon";
import { BookType } from "../../../types/types";
import Button from "../button";
import { Link } from "react-router-dom";
import cover from "../../../common/assets/images/bookcover.png";
import { useImage } from "../../../hooks";

type BookElementProps = {
  onClick?: () => void;
  book: BookType,
  isUserBook?: boolean;
};

export const BookElement = ({
  book,
  isUserBook = false,
}: BookElementProps) => {
  const image = useImage(book);
  return (
    <ElementWrapper className="relative flex h-60 flex-col gap-y-5 lg:h-72">
      <div className="flex">
        <img
          src={image}
          alt=""
          className="mr-5 h-36 w-24 rounded object-cover lg:h-44 lg:w-32"
          onError={(e) => ((e.target as HTMLImageElement).src = cover)}
        />
        <div className="flex flex-col items-start">
          <div className="mb-3 text-xl font-bold leading-5">{book.title}</div>

          <div className="mb-2 flex flex-wrap gap-x-3 ">
            {book.genres.map((item, i) => (
              <div
                key={i}
                className="max-w-full truncate rounded-md bg-slate-200 p-1 text-sm"
              >
                {item.name}
              </div>
            ))}
          </div>

          <div className="mb-2 text-sm">{book.user.name}</div>
          <div className="flex items-center gap-x-3">
            <Icon title={book.rating} icon={<AiFillStar />} />
          </div>
          {isUserBook && (
            <Link to="/account/book/1/edit-book">
              <Button className="mt-2">Редактировать</Button>
            </Link>
          )}
        </div>
      </div>
      <div className="h-28 overflow-hidden">{book.description}</div>
    </ElementWrapper>
  );
};
