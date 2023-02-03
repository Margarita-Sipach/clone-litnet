import { PrimaryButton } from "../../ui/primary-button";
import { SecondaryButton } from "../../ui/secodary-button";
import { Wrapper } from "../../ui/wrapper";
import { ReactComponent as Logo } from "../../../common/assets/icons/logo.svg";
import { useState } from "react";
import { Burger } from "../../ui/burger";
import { CloseButton } from "../../ui/close-button";
import { Modal } from "../../ui/modal";
import { Categories } from "../categories";

interface FooterProps {}

const navItens = [
  {
    title: "Книги",
    link: "",
  },
  {
    title: "Конкурсы",
    link: "",
  },
  {
    title: "Блоги",
    link: "",
  },
  {
    title: "Моя библиотека",
    link: "",
  },
];

export const Header = ({}: FooterProps) => {
  const [burgerMenuDispaly, setBurgerMenuDispaly] = useState(false);
  const [categoruesModalDisplay, setCategoruesModalDisplay] = useState(false);

  return (
    <header className="fixed backdrop-blur-sm w-full flex justify-center h-16 z-10 bg-white bg-opacity-60 shadow">
      <Wrapper className="flex items-center justify-between">
        <Logo className="sm:mr-5 lg:mr-10" />
        <nav
          className={`${
            burgerMenuDispaly ? "flex" : "hidden"
          } w-screen h-screen absolute top-0 left-0 bg-white flex-col items-center py-8 sm:flex sm:flex-row sm:flex-grow sm:w-auto sm:h-auto sm:bg-transparent sm:relative sm:justify-between sm:py-0`}
        >
          <div className="flex flex-col items-center sm:flex-row sm:gap-2 lg:gap-4">
            {navItens.map((item) => (
              <div
                key={item.title}
                className="w-full my-2 text-center sm:text-sm sm:my-0 sm:w-auto lg:text-lg hover:text-indigo-400"
                onClick={() => {
                  if (item.title === "Книги") setCategoruesModalDisplay(true);
                }}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-end">
            <SecondaryButton
              className="w-full sm:w-auto"
              onClickButton={() => {}}
            >
              Войти
            </SecondaryButton>
            <PrimaryButton onClickButton={() => {}}>
              Зарегистрироваться
            </PrimaryButton>
          </div>
          <CloseButton
            onClick={() => setBurgerMenuDispaly(!burgerMenuDispaly)}
            className="sm:hidden"
          />
        </nav>
        <Burger
          onClick={() => setBurgerMenuDispaly(!burgerMenuDispaly)}
        ></Burger>
      </Wrapper>
      {categoruesModalDisplay && (
        <Modal displayModal={setCategoruesModalDisplay}>
          <Categories />
        </Modal>
      )}
    </header>
  );
};
