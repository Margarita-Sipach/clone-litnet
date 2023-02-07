import React from "react";
import { BigSlider } from "../../modules/big-slider";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import { Categories } from "../../modules/categories";
import { ReadOnline } from "../../modules/read-online";
import { Slider } from "../../modules/slider";

const books = [
  {
    img: "https://rust.litnet.com/uploads/covers/220/1661755951_16.png",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
  {
    img: "https://rust.litnet.com/uploads/covers/220/1674196090_78.jpg",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
  {
    img: "https://rust.litnet.com/uploads/covers/220/1674289298_41.png",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
  {
    img: "https://rust.litnet.com/uploads/covers/220/1656301239_95.jpg",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
  {
    img: "https://rust.litnet.com/uploads/covers/220/1675435084_11.jpg",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
  {
    img: "https://rust.litnet.com/uploads/covers/220/1668452069_98.jpg",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
  {
    img: "https://rust.litnet.com/uploads/covers/220/1674287397_15.jpg",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
  {
    img: "https://rust.litnet.com/uploads/covers/220/1616997270_93.jpg",
    category: "gdgfhdg",
    title: "Возьму тебя навсегда",
    author: "Дана Стар",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col justify-between">
      <BigSlider />
      <Wrapper className="flex flex-col gap-y-10">
        <PageWrapper>
          <Categories />
          <Slider title="ТОП Книг" books={books} />
        </PageWrapper>
        <PageWrapper title="Читать онлайн">
          <ReadOnline />
        </PageWrapper>
      </Wrapper>
    </div>
  );
};

export default Home;
