import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface RatingProps {
  rating: number;
  statistic: number[];
}

export const Rating = ({ rating, statistic }: RatingProps) => {
  return (
    <div
      className="flex items-center gap-x-1"
      title={`Статистика оценок\n${(new Array(10)).fill('')
        .map((item, index) => `${"★".repeat(index + 1)} - ${statistic.filter(star => star === index + 1).length}`)
        .join("\n")}`}
    >
      <div className="flex">
        {new Array(5).fill("").map((_, index) => {
          let ratingStr = rating / 2 + "";
          if (
            ratingStr[ratingStr.length - 1] === "5" &&
            +ratingStr < index + 1 &&
            +ratingStr > index
          )
            return (
              <BsStarHalf key={index} className="cursor-pointer text-lg text-indigo-400 hover:text-indigo-500" />
            );
          if (+ratingStr > index)
            return (
              <BsStarFill key={index} className="cursor-pointer text-lg text-indigo-400 hover:text-indigo-500" />
            );
          return (
            <BsStar key={index} className="cursor-pointer text-lg text-indigo-400 hover:text-indigo-500" />
          );
        })}
      </div>
      <span>{rating}</span>
    </div>
  );
};
