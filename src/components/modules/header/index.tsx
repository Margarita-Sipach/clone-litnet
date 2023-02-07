import { PrimaryButton } from "../../ui/primary-button";
import { SecondaryButton } from "../../ui/secodary-button";
import { Wrapper } from "../../ui/wrapper";
import { ReactComponent as Logo } from "../../../common/assets/icons/logo.svg";
import { useState } from "react";
import { Burger } from "../../ui/burger";
import { CloseButton } from "../../ui/close-button";
import { Modal } from "../../ui/modal";
import { Categories } from "../categories";
import { Link } from "react-router-dom";
import { UserMenu } from "../user-menu";

interface FooterProps {
	isUser?: boolean;
}

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
    link: "account",
  },
];

export const Header = ({isUser = true}: FooterProps) => {
  const [burgerMenuDisplay, setBurgerMenuDisplay] = useState(false);
  const [categoriesModalDisplay, setCategoriesModalDisplay] = useState(false);
	const [userModalDisplay, setUserModalDisplay] = useState(false);


  return (
    <header className="fixed backdrop-blur-sm w-full flex justify-center h-16 z-10 bg-white bg-opacity-60 shadow">
      <Wrapper className="flex items-center justify-between">
        <Link to="/">
          <Logo className="sm:mr-5 lg:mr-10" />
        </Link>
        <nav
          className={`${
            burgerMenuDisplay ? "flex" : "hidden"
          } w-screen h-screen absolute top-0 left-0 bg-white flex-col items-center py-8 sm:flex sm:flex-row sm:flex-grow sm:w-auto sm:h-auto sm:bg-transparent sm:relative sm:justify-between sm:py-0`}
        >
          <div className="flex flex-col items-center sm:flex-row sm:gap-2 lg:gap-4">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="w-full my-2 text-center sm:text-sm sm:my-0 sm:w-auto lg:text-lg hover:text-indigo-400"
                onClick={() => {
                  if (item.title === "Книги") setCategoriesModalDisplay(true);
                }}
              >
                <Link to={item.link}>{item.title}</Link>
              </div>
            ))}
          </div>
          {
						!isUser 
					?
					
					(<div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-end">
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
          </div>)
					
					:
					(
						<Link to="/">
              <SecondaryButton onClickButton={() => {}}>
                Выход
              </SecondaryButton>
            </Link>
					)
}
          <CloseButton
            onClick={() => setBurgerMenuDisplay(!burgerMenuDisplay)}
            className="sm:hidden"
          />
        </nav>
				<div className="flex items-center gap-x-2 ">
				
				{isUser && (<img
        src="https://rust.litnet.com/uploads/covers/120/1661453573_85.jpg"
        alt=""
        className="h-10 w-10 ml-2 object-cover rounded-md border-2 border-indigo-400 hover:border-indigo-500 cursor-pointer"
				onClick={() => {
					setUserModalDisplay(true);
				}}
      />)
}
<Burger
          onClick={() => setBurgerMenuDisplay(!burgerMenuDisplay)}
        ></Burger>
				</div>
        

      </Wrapper>
      {categoriesModalDisplay && (
        <Modal displayModal={setCategoriesModalDisplay}>
          <Categories />
        </Modal>
      )}
			{userModalDisplay && (
        <Modal displayModal={setUserModalDisplay}>
          <UserMenu />
        </Modal>
      )}
    </header>
  );
};
