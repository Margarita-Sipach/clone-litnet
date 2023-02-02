import { Avatar } from "../avatar";
import { ElementWrapper } from "../element-wrapper";
import { AiFillEye, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Date } from "../date";

interface BookElementProps {
  onClick?: () => void;
  book: {
    img: string;
    title: string;
    author: string;
    annotation: string;
    rating: number;
    category: string;
  };
}

export const BookElement = ({ book }: BookElementProps) => {
  return (
    <ElementWrapper className="flex flex-col w-full gap-y-5 h-60 lg:h-72 relative">
      <div className="flex">
        <img
          src={book.img}
          alt=""
          className="w-24 mr-5 h-36 lg:h-44 lg:w-32 object-cover rounded"
        />
        <div className="flex flex-col items-start ">
          <div className="truncate max-w-full text-sm p-1 bg-slate-200 rounded-md mb-2">
            {book.category}
          </div>
          <div className="font-bold leading-5 mb-2">{book.title}</div>
          <div className="mb-2 text-sm">{book.author}</div>
          <div className="flex gap-x-1 items-center">
            <AiFillStar className="text-amber-400" />
            <span className="text-base">{book.rating}</span>
          </div>
        </div>
      </div>
      <div className="overflow-hidden h-28">{book.annotation}</div>
    </ElementWrapper>
  );
};
