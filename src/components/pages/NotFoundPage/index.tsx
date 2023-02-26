import React from "react";
import { Footer } from "../../modules/Footer";
import Header from "../../modules/Header";

import slide1 from "../../../common/assets/images/big-slider/banner-light-1.png";
import slide2 from "../../../common/assets/images/big-slider/banner-light-2.png";
import slide3 from "../../../common/assets/images/big-slider/banner-light-3.png";
import slide4 from "../../../common/assets/images/big-slider/banner-light-4.png";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white ">
      <Header />
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
      </div>
      <div className="absolute flex h-[550px] w-full flex-grow flex-col items-center justify-center gap-y-6">
        <span className="text-8xl text-indigo-400">404</span>
        <div className="text-2xl text-indigo-400">Страница не найдена</div>
      </div>
      <div className="text-xl">
        Страницы, которую вы ищете у нас нет или она была удалена. Проверьте
        правильность введенного адреса.
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
