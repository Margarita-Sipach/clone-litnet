import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../../hooks";
import { Router } from "../../router";
import Button from "../../ui/button";
import { PrimaryInput } from "../../ui/primary-input";

export const AuthorizationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, isError } = useLogin();

  const createFormData = () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    return formData;
  };

  const handleSubmitForm = () => {
    login(createFormData());
  };

  return (
    <form action="" className="items-left flex max-w-[500px] flex-col gap-y-5 ">
      {isLoading && <p>Sending data...</p>}
      <PrimaryInput
        attributes={{
          required: true,
          placeholder: "E-mail",
          type: "email",
          invalid: isError,
        }}
        onChange={(e) => setEmail(e?.target.value || "")}
      />
      <PrimaryInput
        attributes={{
          required: true,
          placeholder: "Пароль",
          type: "password",
          invalid: isError,
        }}
        onChange={(e) => setPassword(e?.target.value || "")}
      />
      <Button className="text-base" onClick={handleSubmitForm}>
        Войти
      </Button>
      <Link className="text-center hover:text-blue-500" to={Router.register}>
        Нет аккаунта? Зарегистрироваться!
      </Link>
    </form>
  );
};
