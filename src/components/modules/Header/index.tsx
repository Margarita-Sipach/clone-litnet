import { Wrapper } from "../../ui/Wrapper";
import { ReactComponent as Logo } from "../../../common/assets/icons/logo.svg";
import { useState } from "react";
import { Burger } from "../../ui/Burger";
import { CloseButton } from "../../ui/CloseButton";
import Categories from "../Genres/components/Categories";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { Router } from "../../router";
import { CircleUserAvatar } from "../../ui/CircleAvatar";
import Button from "../../ui/Button";
import NewModal from "../../ui/NewModal";

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
    title: "Моя библиотека",
    link: `account/library`,
  },
  {
    title: "Игра",
    link: "game",
  },
];

const Header = () => {
  const { user, isUserLogged, logout } = useUserContext();
  const [burgerMenuDisplay, setBurgerMenuDisplay] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(Router.main);
  };

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
                  item.title === "Книги" && setModalIsOpen(true);
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
          {!isUserLogged ? (
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-end">
              <Button
                type="secondary"
                className="w-full sm:w-auto"
                onClick={() => navigate(Router.login)}
              >
                Войти
              </Button>
              <Button onClick={() => navigate(Router.register)}>
                Зарегистрироваться
              </Button>
            </div>
          ) : (
            <div className="flex justify-center gap-4">
              <Link to={Router.main}>
                <Button type="secondary" onClick={handleLogout}>
                  Выход
                </Button>
              </Link>
              <Link to={`${Router.users}/${user?.id}`}>
                <CircleUserAvatar image={user?.img || ""} />
              </Link>
            </div>
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
      <NewModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <Categories onClick={() => setModalIsOpen(false)} />
      </NewModal>
    </header>
  );
};

export default Header;
