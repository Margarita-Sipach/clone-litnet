import { ElementWrapper } from "../../../ui/wrappers/ElementWrapper";
import { AiFillStar } from "react-icons/ai";
import { Icon } from "../../../ui/icons/Icon";
import { BookElementType } from "../../../../types/types";
import { Button } from "../../../ui/buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import { handleImageError, processImage } from "../../../../utils/utils";

type BookElementProps = {
  onClick?: () => void;
  isUserBook?: boolean;
} & BookElementType;

export const BookElement = ({
  id,
  title,
  author,
  authorId,
  img,
  rating,
  categories,
  annotation,
  isUserBook = false,
}: BookElementProps) => {
  const navigate = useNavigate();
  return (
    <Link to={`/books/${id}`}>
      <ElementWrapper className="flex flex-col gap-6 sm:h-60 sm:flex-row lg:h-72">
        <img
          src={processImage(img)}
          alt=""
          onError={handleImageError}
          className="aspect-square h-full rounded border object-cover sm:mr-5"
        />
        <div className="flex h-full w-full flex-col items-start justify-center self-center sm:w-auto">
          <p className="pb-2 text-lg font-bold leading-5 text-gray-700 lg:text-xl">
            {title}
          </p>
          <Link
            to={`/users/${authorId}`}
            className="mb-2 text-sm font-medium text-blue-800"
          >
            {author}
          </Link>
          <div className="mb-2 flex flex-wrap gap-x-3 ">
            {categories.map((item) => (
              <div
                key={item}
                className="truncate rounded-md bg-gray-100 py-1 px-2 text-xs "
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-x-3">
            <Icon title={rating} icon={<AiFillStar />} />
          </div>
          <p className="overflow-ellipsis whitespace-pre-wrap text-sm text-gray-800 lg:text-base">
            {annotation.length > 120
              ? `${annotation.substring(0, 120)}...`
              : annotation}
          </p>
          {isUserBook && (
            <Button
              size="sm"
              onClick={() => navigate(`/account/book/${id}/edit-book`)}
              className="mt-auto"
            >
              Редактировать
            </Button>
          )}
        </div>
      </ElementWrapper>
    </Link>
  );
};
