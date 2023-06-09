import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLogin } from "../../../../hooks/user/useLogin";
import {
  createFormData,
  ErrorInputMessages,
  ErrorNotifies,
  InputNames,
} from "../../../../utils/formUtils";
import { Router } from "../../../router";
import { Button } from "../../../ui/buttons/Button";
import { Input } from "../../../ui/inputs/Input";
import { Spinner } from "../../../ui/Spinner";
import { notifyError } from "../../../../utils/utils";

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
      notifyError(ErrorNotifies.INCORRECT_EMAIL_OR_PASSWORD);
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
      {isLoading ? (
        <Spinner className="flex w-full justify-center" />
      ) : (
        <Button onClick={handleSubmit(handleSubmitForm)}>Войти</Button>
      )}
      <Link className="text-center hover:text-blue-500" to={Router.register}>
        Нет аккаунта? Зарегистрироваться!
      </Link>
    </form>
  );
};
