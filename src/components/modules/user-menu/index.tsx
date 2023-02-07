import { Link } from "react-router-dom";

interface UserMenuProps {
}

const navItems = [
  {
    title: "Mоя страница",
    link: "",
  },
  {
    title: "Редактировать профиль",
    link: "",
  },
  {
    title: "Моя библиотека",
    link: "",
  },
  {
    title: "Добавить книгу",
    link: "",
  },
	{
    title: "Мои блоги",
    link: "",
  },
	{
    title: "Добавить блог",
    link: "",
  },
	
];

export const UserMenu = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      {navItems.map(item => <Link to={item.link}>{item.title}</Link>)}
    </div>
  );
};
