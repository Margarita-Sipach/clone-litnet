import React, { FormEvent, ChangeEvent, useState } from "react";
import { PrimaryInput } from "../../ui/primary-input";
import { FileInput } from "../../ui/file-input";
import { Link, useNavigate } from "react-router-dom";
import { Router } from "../../router";
import FormButton from "../../ui/form-button";
import { API } from "../../../api/api";
import { useUserContext } from "../../context/userContext";
import { LocalStorage } from "../../storage";

export const RegistrationForm = () => {
  const { setUser } = useUserContext();
  const [file, setFile] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const navigate = useNavigate();

  const goToHomePage = () => navigate(Router.main);

  const handleSetFile = (e?: ChangeEvent<HTMLInputElement>) => {
    const files = (e?.target as HTMLInputElement)?.files;
    if (files) setFile(files[0]);
  };

  const handleRegistration = async (formData: FormData) => {
    const response = (await API.registerUser(formData)) as Response;
    if (response.ok) {
      const { token, user } = await response.json();
      setUser(user);
      LocalStorage.setUserToken(token);
      goToHomePage();
    } else {
      const error = await response.json();
      alert(error.message);
    }
  };

  const handleSubmitForm = async (e: FormEvent<HTMLButtonElement>) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", login);
    if (file) formData.append("img", file);

    await handleRegistration(formData);
  };

  return (
    <form action="" className="items-left flex max-w-[500px] flex-col gap-y-5 ">
      <FileInput className="h-32 w-32" onChange={handleSetFile} />
      <PrimaryInput
        attributes={{ placeholder: "Логин", required: true }}
        onChange={(e) => setLogin(e?.target.value || "")}
      />
      <PrimaryInput
        attributes={{ placeholder: "E-mail", required: true, type: "email" }}
        onChange={(e) => setEmail(e?.target.value || "")}
      />
      <PrimaryInput
        attributes={{ placeholder: "Пароль", required: true, type: "password" }}
        onChange={(e) => setPassword(e?.target.value || "")}
      />
      <FormButton onSubmit={handleSubmitForm}>Зарегистрироваться</FormButton>
      <Link className="text-center hover:text-blue-500" to={Router.login}>
        Уже есть аккаунт? Войти!
      </Link>
    </form>
  );
};
