import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../../api/api";
import { useUserContext } from "../../context/userContext";
import { Router } from "../../router";
import { LocalStorage } from "../../storage";
import FormButton from "../../ui/form-button";
import { PrimaryInput } from "../../ui/primary-input";

export const AuthorizationForm = () => {
  const { setUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitForm = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const response = await API.loginUser(formData);
    if (response.ok) {
      const { token, user } = await response.json();
      LocalStorage.setUserToken(token);
      setUser(user);
      navigate(Router.main);
    } else {
      const error = await response.json();
      alert(error.message);
    }
  };

  return (
    <form action="" className="items-left flex max-w-[500px] flex-col gap-y-5 ">
      <PrimaryInput
        attributes={{ required: true, placeholder: "E-mail", type: "email" }}
        onChange={(e) => setEmail(e?.target.value || "")}
      />
      <PrimaryInput
        attributes={{ required: true, placeholder: "Пароль", type: "password" }}
        onChange={(e) => setPassword(e?.target.value || "")}
      />
      <FormButton className="text-base" onSubmit={handleSubmitForm}>
        Войти
      </FormButton>
      <Link className="text-center hover:text-blue-500" to={Router.register}>
        Нет аккаунта? Зарегистрироваться!
      </Link>
    </form>
  );
};
