import { Wrapper } from "../../../ui/wrappers/Wrapper";

import slide1 from "./../../../../common/assets/images/big-slider/banner-light-1.png";
import slide2 from "./../../../../common/assets/images/big-slider/banner-light-2.png";
import slide3 from "./../../../../common/assets/images/big-slider/banner-light-3.png";
import slide4 from "./../../../../common/assets/images/big-slider/banner-light-4.png";

import "./animation.css";
import { Link } from "react-router-dom";
import { Button } from "../../../ui/buttons/Button";
import { useUserContext } from "../../../context/userContext";

const benefits = [
  "Все популярные жанры: боевики, фэнтези, фантастика и другие",
  "Книги можно читать в процессе создания либо завершенные",
  "Общайтесь с авторами напрямую в блогах и комментариях",
];

const HeroSection = () => {
  const { isUserLogged } = useUserContext();
  return (
    <div className="relative mb-10 flex h-[550px] w-full items-center justify-center">
      {[slide1, slide2, slide3, slide4].map((item, index) => (
        <div
          key={item}
          style={{
            background: `url(${item}) center`,
            animation: `item${index + 1} 10s linear infinite`,
          }}
          className="absolute top-0 left-0 h-full w-full bg-cover"
        />
      ))}
      <Wrapper className="absolute ">
        <h1 className="mb-7 max-w-[700px] text-3xl text-white sm:text-6xl">
          Книги, которые ты полюбишь
        </h1>
        <div className="mb-7 flex justify-between gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((item) => (
            <div
              key={item}
              className="w-1/3 text-sm text-white sm:text-base sm:text-lg"
            >
              {item}
            </div>
          ))}
        </div>
        {!isUserLogged && (
          <Link to="/registration">
            <Button className="lg:text-lg">Присоединиться</Button>
          </Link>
        )}
      </Wrapper>
    </div>
  );
};

export default HeroSection;
