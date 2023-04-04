import React, { useRef, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

interface StarRatingProps {
  rating: number;
  totalStars: number;
  precision: number;
  onClick: (rating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  precision = 1,
  totalStars = 5,
  onClick,
}) => {
  const [activeStar, setActiveStar] = useState(rating / 2);
  const [hoverActiveStar, setHoverActiveStar] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const ratingContainerRef = useRef(null);

  const calculateRating = (e) => {
    const { width, left } = (
      ratingContainerRef.current! as Element
    ).getBoundingClientRect();
    const percent = (e.clientX - left) / width;
    const numberInStars = percent * totalStars;
    const nearestNumber =
      Math.round((numberInStars + precision / 2) / precision) * precision;

    return Number(
      nearestNumber.toFixed(precision.toString().split(".")[1]?.length || 0)
    );
  };

  const handleClick = (e) => {
    const rating = calculateRating(e) * 2;
    onClick(rating);
    setIsHovered(false);
    setActiveStar(rating / 2);
  };

  const handleMouseMove = (e) => {
    setIsHovered(true);
    setHoverActiveStar(calculateRating(e));
  };

  const handleMouseLeave = (e) => {
    setHoverActiveStar(-1);
    setActiveStar(rating / 2);
    setIsHovered(false);
  };

  return (
    <div className="flex max-w-[30%]">
      <div
        className="star-rating flex max-w-[98%] items-center justify-between"
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={ratingContainerRef}
      >
        {[...new Array(totalStars)].map((arr, index) => {
          const activeState = isHovered ? hoverActiveStar : activeStar;

          const showEmptyIcon = activeState === -1 || activeState < index + 1;

          const isActiveRating = activeState !== 1;
          const isRatingWithPrecision = activeState % 1 !== 0;
          const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
          const showRatingWithPrecision =
            isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

          return (
            <div key={index}>
              <div
                style={{
                  width: showRatingWithPrecision
                    ? `${(activeState % 1) * 100}%`
                    : "0%",
                  overflow: "hidden",
                  position: "absolute",
                }}
              >
                <BsStarHalf className="cursor-pointer text-xl text-indigo-400" />
              </div>
              <div
                style={{
                  color: showEmptyIcon ? "gray" : "inherit",
                }}
              >
                {showEmptyIcon ? (
                  <BsStar className="cursor-pointer text-xl text-indigo-400" />
                ) : (
                  <BsStarFill className="cursor-pointer text-xl text-indigo-400" />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <span className="ml-3 text-xl">{rating}</span>
    </div>
  );
};
