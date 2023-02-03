import { PrimaryButton } from "../../ui/primary-button";
import { Wrapper } from "../../ui/wrapper";

import slide1 from "../../../common/assets/images/big-slider/banner-light-1.png";
import slide2 from "../../../common/assets/images/big-slider/banner-light-2.png";
import slide3 from "../../../common/assets/images/big-slider/banner-light-3.png";
import slide4 from "../../../common/assets/images/big-slider/banner-light-4.png";

import "./animation.css";

const benefits = [
  "Все популярные жанры: боевики, фэнтези, фантастика и другие",
  "Книги можно читать в процессе создания либо завершенные",
  "Общайтесь с авторами напрямую в блогах и комментариях",
];

interface BigSliderProps {}

export const BigSlider = ({}: BigSliderProps) => {
  return (
    <div className="relative w-full h-[550px] flex items-center justify-center mb-10">
      {[slide1, slide2, slide3, slide4].map((item, index) => (
        <div
          key={item}
          style={{
            background: `url(${item}) center`,
            animation: `item${index + 1} 10s linear infinite`,
          }}
          className="w-full h-full bg-cover absolute top-0 left-0"
        />
      ))}
      <Wrapper className="absolute ">
        <h1 className="text-white text-3xl mb-7 max-w-[700px] sm:text-6xl">
          Книги, которые ты полюбишь
        </h1>
        <div className="mb-7 flex justify-between gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((item) => (
            <div
              key={item}
              className="w-1/3 text-white text-sm sm:text-base sm:text-lg"
            >
              {item}
            </div>
          ))}
        </div>
        <a href="#">
          <PrimaryButton>Присоединиться</PrimaryButton>
        </a>
      </Wrapper>
    </div>
  );
};
