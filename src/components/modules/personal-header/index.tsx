import { Wrapper } from "../../ui/wrapper";
import { SecondaryButton } from "../../ui/secodary-button";

import "./gradient.css";
import { Modal } from "../../ui/modal";
import { UserMenu } from "../user-menu";
import { useMemo, useState } from "react";
import { PrimaryButton } from "../../ui/primary-button";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";

const blog = {
  img: "https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042660_10.jpg",
  author: "wwwwww wwwww",
  date: "20.22.2222",
  title: "kkkkkkkkkk",
  text: "kkkkkkkkk kkkkkk kkkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkkkkk kkkkkkkk kkkkkkk kkkkkkkkkkk kkkkkkkkkkk kkkkkkkkkkkk kkkkkkkkk kkkkkkkkkkkkkk kkkkkkkkkkk kkkkkkk k",
  commentCount: 25,
};

export const PersonalHeader = () => {
  const [userModalDisplay, setUserModalDisplay] = useState(false);
  const { user } = useUserContext();
  const isUserLogged = useMemo(() => (user ? true : false), [user]);

  return (
    <Wrapper className="gradient mb-10 flex h-72 w-full flex-col justify-between bg-indigo-400 pt-24 sm:pt-24">
      <div className="flex w-full gap-x-5">
        <img src={blog.img} alt="" className="h-32 w-32 rounded object-cover" />
        <div className="flex flex-col items-start gap-2">
          <div className="text-lg text-white">{blog.author}</div>
          {!isUserLogged && (
            <SecondaryButton className="">Подписаться</SecondaryButton>
          )}
        </div>
      </div>
      <div className="flex w-full flex-wrap gap-2 ">
        <Link to="books">
          <SecondaryButton className="">Книги</SecondaryButton>
        </Link>
        <Link to="blogs">
          <SecondaryButton className="">Блог</SecondaryButton>
        </Link>
        <Link to="about">
          <SecondaryButton className="">Обо мне</SecondaryButton>
        </Link>
        {isUserLogged && (
          <PrimaryButton
            className=""
            onClickButton={() => setUserModalDisplay(true)}
          >
            Другое
          </PrimaryButton>
        )}
      </div>
      {userModalDisplay && (
        <Modal displayModal={setUserModalDisplay}>
          <UserMenu />
        </Modal>
      )}
    </Wrapper>
  );
};
