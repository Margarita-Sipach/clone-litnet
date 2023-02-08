import { ElementWrapper } from "../element-wrapper";
import { AiFillStar, AiOutlineComment } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import { Icon } from "../icon";
import { BookElementType } from "../../../types/types";

interface BookElementProps {
  onClick?: () => void;
  book: BookElementType;
}

export const BookElement = ({ book }: BookElementProps) => {
  return (
    <ElementWrapper className="relative flex h-60 flex-col gap-y-5 lg:h-72">
      <div className="flex">
        <img
          src={book.img}
          alt=""
          className="mr-5 h-36 w-24 rounded object-cover lg:h-44 lg:w-32"
        />
        <div className="flex flex-col items-start">
          <div className="mb-3 text-xl font-bold leading-5">{book.title}</div>

          <div className="mb-2 flex flex-wrap gap-x-3 ">
            {book.categories.map((item) => (
              <div className="max-w-full truncate rounded-md bg-slate-200 p-1 text-sm">
                {item}
              </div>
            ))}
          </div>

          <div className="mb-2 text-sm">{book.author}</div>
          <div className="flex items-center gap-x-3">
            <Icon title={book.rating} icon={<AiFillStar />} />
            <Icon title={book.readAmount} icon={<GiBookshelf />} />
            <Icon title={book.commentAmount} icon={<AiOutlineComment />} />
          </div>
        </div>
      </div>
      <div className="h-28 overflow-hidden">{book.annotation}</div>
    </ElementWrapper>
  );
};
