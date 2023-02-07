import { Wrapper } from "../../ui/wrapper";
import { SecondaryButton } from "../../ui/secodary-button";

import "./gradient.css";

const blog = {
  img: "https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042660_10.jpg",
  author: "wwwwww wwwww",
  date: "20.22.2222",
  title: "kkkkkkkkkk",
  text: "kkkkkkkkk kkkkkk kkkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkkkkk kkkkkkkk kkkkkkk kkkkkkkkkkk kkkkkkkkkkk kkkkkkkkkkkk kkkkkkkkk kkkkkkkkkkkkkk kkkkkkkkkkk kkkkkkk k",
  commentCount: 25,
};

export const PersonalHeader = () => {
  return (
    <Wrapper className="gradient mb-10 flex h-72 w-full flex-col justify-between bg-indigo-400 pt-24 sm:pt-24">
      <div className="flex w-full gap-x-5">
        <img src={blog.img} alt="" className="h-32 w-32 rounded object-cover" />
        <div className="flex flex-col items-start gap-2">
          <div className="text-lg text-white">{blog.author}</div>
          <SecondaryButton className="">Подписаться</SecondaryButton>
        </div>
      </div>
      <div className="flex w-full gap-x-2">
        <SecondaryButton className="">Книги</SecondaryButton>
        <SecondaryButton className="">Блог</SecondaryButton>
        <SecondaryButton className="">Обо мне</SecondaryButton>
      </div>
    </Wrapper>
  );
};
