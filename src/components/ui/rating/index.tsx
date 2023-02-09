import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Date } from "../date";

interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  let roundRating = Math.round(rating / 2);

  return (
    <div className="mb-2 flex items-center gap-x-3">
      <div className="flex">
        {new Array(5)
          .fill("")
          .map((_, index) =>
            roundRating <= index ? (
              <AiOutlineStar className="cursor-pointer text-lg text-indigo-400 hover:text-indigo-500" />
            ) : (
              <AiFillStar className="cursor-pointer text-lg text-indigo-400 hover:text-indigo-500" />
            )
          )}
      </div>
      <span>{rating}</span>
    </div>
  );
};
