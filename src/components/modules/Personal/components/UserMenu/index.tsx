import { Link } from "react-router-dom";

const navItems = [
  {
    title: "Редактировать профиль",
    link: "/account/edit",
  },
  {
    title: "Сменить пароль",
    link: "/account/edit-password",
  },
  {
    title: "Моя библиотека",
    link: "/account/library",
  },
  {
    title: "Добавить книгу",
    link: "/account/add-book",
  },
  {
    title: "Добавить блог",
    link: "/account/add-blog",
  },
  {
    title: "Добавить конкурс",
    link: "/account/add-contest",
  },
];

export const UserMenu = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      {navItems.map((item) => (
        <Link to={item.link}>{item.title}</Link>
      ))}
    </div>
  );
};