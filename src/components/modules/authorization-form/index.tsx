import { Link } from "react-router-dom";
import { Router } from "../../router";
import Button from "../../ui/button";
import { PrimaryInput } from "../../ui/primary-input";

export const AuthorizationForm = () => {
  return (
    <form action="" className="items-left flex max-w-[500px] flex-col gap-y-5 ">
      <PrimaryInput
        attributes={{ required: true, placeholder: "E-mail", type: "email" }}
      />
      <PrimaryInput
        attributes={{ required: true, placeholder: "Пароль", type: "password" }}
      />
      <Button className="text-base">Войти</Button>
      <Link className="text-center hover:text-blue-500" to={Router.register}>
        Нет аккаунта? Зарегистрироваться!
      </Link>
    </form>
  );
};
