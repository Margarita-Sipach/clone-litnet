import { SliderElement } from "../../ui/slider-element";
import { ReactComponent as Arrow } from "../../../common/assets/icons/slider-button.svg";
import { useState } from "react";
import { BookType } from "../../../types/types";

interface SliderProps {
  title: string;
  books: BookType[];
}

export const Slider = ({ title, books }: SliderProps) => {
  const [slides, setSlides] = useState(books);

  const handleClickRight = () => {
    setSlides([...slides, slides[0]].filter((_, index) => index !== 0));
  };

  const handleClickLeft = () => {
    setSlides(
      [slides[slides.length - 1], ...slides].filter(
        (_, index) => index !== slides.length
      )
    );
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl mb-9">{title}</h2>
      <div className="h-full relative">
        <div className={`flex gap-x-5 justify-center`}>
          {slides.map((item, index) => (
            <SliderElement key={index} book={item} />
          ))}
        </div>
        <button
          className="flex justify-center items-center absolute top-0 left-0 bg-white bg-opacity-60 px-3 h-full hover:bg-opacity-80 "
          onClick={handleClickLeft}
        >
          <Arrow className="rotate-180" />
        </button>
        <button
          className="flex justify-center items-center absolute top-0 right-0 bg-white bg-opacity-60 px-3 h-full hover:bg-opacity-80"
          onClick={handleClickRight}
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
};
