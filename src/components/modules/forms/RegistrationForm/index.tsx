import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../../../ui/inputs/Input";
import { FileInput } from "../../../ui/inputs/FileInput";
import { Link } from "react-router-dom";
import { Router } from "../../../router";
import useRegistration from "../../../../hooks/forms/useRegistration";
import { Button } from "../../../ui/buttons/Button";
import { useForm } from "react-hook-form";
import {
  ErrorInputMessages,
  ErrorNotifies,
  InputNames,
} from "../../../../utils/formUtils";
import { notifyError } from "../../../../hooks";
import { Spinner } from "../../../ui/Spinner";
export const RegistrationForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const { registration, isLoading, isError, error } = useRegistration();
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm({ mode: "onBlur" });

  const handleSetFile = (e?: ChangeEvent<HTMLInputElement>) => {
    const files = (e?.target as HTMLInputElement)?.files;
    if (files) setFile(files[0]);
  };

  const handleSubmitForm = (data: any) => {
    registration({ ...data, img: file });
    resetField(InputNames.PASSWORD);
  };

  useEffect(() => {
    if (isError && error) {
      notifyError(ErrorNotifies.NAME_OR_EMAIL_EXISTS);
    }
  }, [error, isError]);

  return (
    <form
      action="src/components/modules/Registration/components/RegistrationForm/index"
      className="items-left flex max-w-[500px] flex-col gap-y-5 "
    >
      <FileInput className="h-32 w-32" onChange={handleSetFile} />
      {isLoading && <p>Sending data...</p>}
      <Input
        placeholder="Логин"
        properties={{
          ...register(InputNames.NAME, {
            required: ErrorInputMessages.REQUIRED,
            minLength: {
              value: 3,
              message: ErrorInputMessages.NAME_LENGTH,
            },
            maxLength: {
              value: 12,
              message: ErrorInputMessages.NAME_LENGTH,
            },
          }),
        }}
        name={InputNames.NAME}
        errors={errors}
      />
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
            minLength: {
              value: 4,
              message: ErrorInputMessages.PASSWORD_LENGTH,
            },
            maxLength: {
              value: 12,
              message: ErrorInputMessages.PASSWORD_LENGTH,
            },
          }),
        }}
        name={InputNames.PASSWORD}
        errors={errors}
      />
      {isLoading ? (
        <Spinner className="flex w-full justify-center" />
      ) : (
        <Button onClick={handleSubmit(handleSubmitForm)}>
          Зарегистрироваться
        </Button>
      )}
      <Link className="text-center hover:text-blue-500" to={Router.login}>
        Уже есть аккаунт? Войти!
      </Link>
    </form>
  );
};

export default RegistrationForm;
