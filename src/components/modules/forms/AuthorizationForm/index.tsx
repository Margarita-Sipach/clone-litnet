import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../../../api/forms/useLogin";
import { Router } from "../../../router";
import { Button } from "../../../ui/buttons/Button";
import { Input } from "../../../ui/inputs/Input";

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
    <form
      action="src/components/modules/Authorization/components/AuthorizationForm/index"
      className="items-left flex max-w-[500px] flex-col gap-y-5 "
    >
      {isLoading && <p>Sending data...</p>}
      <Input
        invalid={isError}
        placeholder="E-mail"
        type="email"
        required={true}
        value={email}
        onChange={(e) => setEmail(e?.target.value || "")}
      />
      <Input
        invalid={isError}
        placeholder="Пароль"
        type="password"
        required={true}
        value={password}
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
