import { PrimaryButton } from "../../ui/primary-button";
import { SecondaryButton } from "../../ui/secodary-button";
import { Wrapper } from "../../ui/wrapper";
import { ReactComponent as Logo } from "../../../common/assets/icons/logo.svg";
import { useEffect, useMemo, useState } from "react";
import { Burger } from "../../ui/burger";
import { CloseButton } from "../../ui/close-button";
import { Modal } from "../../ui/modal";
import { Categories } from "../categories";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { LocalStorage } from "../../storage";
import { Router } from "../../router";

const navItems = [
  {
    title: "Книги",
    link: "",
  },
  {
    title: "Конкурсы",
    link: "contests",
  },
  {
    title: "Блоги",
    link: "blogs",
  },
  {
    title: "Моя страница",
    link: `users/1`,
  },
];

export const Header = () => {
  const { user, setUser } = useUserContext();
  const isUserLogged = useMemo(() => (user?.id ? true : false), [user]);
  const [burgerMenuDisplay, setBurgerMenuDisplay] = useState(false);
  const [categoriesModalDisplay, setCategoriesModalDisplay] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser();
    LocalStorage.removeUserToken();
    navigate(Router.main);
  };

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
    <header className="fixed z-10 flex h-16 w-full justify-center bg-white bg-opacity-60 shadow backdrop-blur-sm">
      <Wrapper className="flex items-center justify-between">
        <Link to="/">
          <Logo className="sm:mr-5 lg:mr-10" />
        </Link>
        <nav
          className={`${
            burgerMenuDisplay ? "flex" : "hidden"
          } absolute top-0 left-0 h-screen w-screen flex-col items-center bg-white py-8 sm:relative sm:flex sm:h-auto sm:w-auto sm:flex-grow sm:flex-row sm:justify-between sm:bg-transparent sm:py-0`}
        >
          <div className="flex flex-col items-center sm:flex-row sm:gap-2 lg:gap-4">
            {navItems.map((item) => (
              <Link
                to={item.link}
                key={item.title}
                className="my-2 w-full text-center hover:text-indigo-400 sm:my-0 sm:w-auto sm:text-sm lg:text-lg"
                onClick={() => {
                  item.title === "Книги" && setCategoriesModalDisplay(true);
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
          {!isUserLogged ? (
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-end">
              <Link to="/authorization">
                <SecondaryButton
                  className="w-full sm:w-auto"
                  onClickButton={() => {}}
                >
                  Войти
                </SecondaryButton>
              </Link>
              <Link to="/registration">
                <PrimaryButton onClickButton={() => {}}>
                  Зарегистрироваться
                </PrimaryButton>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <SecondaryButton onClickButton={handleLogout}>
                Выход
              </SecondaryButton>
            </Link>
          )}
          <CloseButton
            onClick={() => setBurgerMenuDisplay(!burgerMenuDisplay)}
            className="sm:hidden"
          />
        </nav>
        <div className="flex items-center gap-x-2 ">
          <Burger
            onClick={() => setBurgerMenuDisplay(!burgerMenuDisplay)}
          ></Burger>
        </div>
      </Wrapper>
      {categoriesModalDisplay && (
        <Modal displayModal={setCategoriesModalDisplay}>
          <Categories onClick={() => setCategoriesModalDisplay(false)} />
        </Modal>
      )}
    </header>
  );
};
