import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { notifyError } from "../../../../hooks";
import useLogin from "../../../../hooks/forms/useLogin";
import {
  createFormData,
  ErrorInputMessages,
  InputNames,
} from "../../../../utils/formUtils";
import { Router } from "../../../router";
import { Button } from "../../../ui/buttons/Button";
import { Input } from "../../../ui/inputs/Input";
import { Spinner } from "../../../ui/Spinner";

export const AuthorizationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm({ mode: "onBlur" });
  const { login, isLoading, isError, error } = useLogin();

  const handleSubmitForm = (data) => {
    login(createFormData(data));
    resetField(InputNames.PASSWORD);
  };

  useEffect(() => {
    if (isError && error) {
      notifyError("Неправильный email или пароль");
    }
  }, [error, isError]);

  return (
    <form className="items-left flex max-w-[500px] flex-col gap-y-5">
      <Input
        type="email"
        placeholder="E-mail"
        properties={{
          ...register(InputNames.EMAIL, {
            required: ErrorInputMessages.REQUIRED,
          }),
        }}
        name={InputNames.EMAIL}
        errors={errors}
      />
      <Input
        placeholder="Пароль"
        type="password"
        properties={{
          ...register(InputNames.PASSWORD, {
            required: ErrorInputMessages.REQUIRED,
          }),
        }}
        name={InputNames.PASSWORD}
        errors={errors}
      />
      <Button className="text-base" onClick={handleSubmit(handleSubmitForm)}>
        Войти
      </Button>
      <Link className="text-center hover:text-blue-500" to={Router.register}>
        Нет аккаунта? Зарегистрироваться!
      </Link>
      {isLoading && <Spinner />}
    </form>
  );
};
