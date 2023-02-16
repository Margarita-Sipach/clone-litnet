import { ElementWrapper } from "../element-wrapper";
import { AiFillStar, AiOutlineComment } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import { Icon } from "../icon";
import { BookElementType } from "../../../types/types";
import Button from "../button";
import { Link } from "react-router-dom";

type BookElementProps = {
  onClick?: () => void;
  isUserBook?: boolean;
} & BookElementType;

export const BookElement = ({
  title,
  author,
  img,
  rating,
  categories,
  annotation,
  isUserBook = false,
}: BookElementProps) => {
  return (
    <ElementWrapper className="relative flex h-60 flex-col gap-y-5 lg:h-72">
      <div className="flex">
        <img
          src={img}
          alt=""
          className="mr-5 h-36 w-24 rounded object-cover lg:h-44 lg:w-32"
        />
        <div className="flex flex-col items-start">
          <div className="mb-3 text-xl font-bold leading-5">{title}</div>

          <div className="mb-2 flex flex-wrap gap-x-3 ">
            {categories.map((item) => (
              <div
                key={item}
                className="max-w-full truncate rounded-md bg-slate-200 p-1 text-sm"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mb-2 text-sm">{author}</div>
          <div className="flex items-center gap-x-3">
            <Icon title={rating} icon={<AiFillStar />} />
            {/* <Icon title={readAmount} icon={<GiBookshelf />} />
            <Icon title={commentAmount} icon={<AiOutlineComment />} /> */}
          </div>
          {isUserBook && (
            <Link to="/account/book/1/edit-book">
              <Button className="mt-2">Редактировать</Button>
            </Link>
          )}
        </div>
      </div>
      <div className="h-28 overflow-hidden">{annotation}</div>
    </ElementWrapper>
  );
};
