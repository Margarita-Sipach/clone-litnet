import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../../../context/userContext";
import { Button } from "../../../../ui/buttons/Button";
import { PageWrapper } from "../../../../ui/wrappers/PageWrapper";
import { Input } from "../../../../ui/inputs/Input";
import { Wrapper } from "../../../../ui/wrappers/Wrapper";
import { Spinner } from "../../../../ui/Spinner";
import {
  createFormData,
  ErrorInputMessages,
  ErrorNotifies,
  InputNames,
} from "../../../../../utils/formUtils";
import { useEditPassword } from "../../../../../hooks/account/useEditPassword";
import { checkUserPassword } from "../../../../../hooks/forms/useLogin";
import { notifyError } from "../../../../../hooks";

export const AccountEditPassword = () => {
  const { user } = useUserContext();
  const { editPassword, isLoading, isError, error } = useEditPassword();
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm({ mode: "onBlur" });

  const handleCheckPassword = async (data) => {
    try {
      await checkUserPassword(
        createFormData({
          email: `${user?.email}`,
          password: data[InputNames.PASSWORD],
        })
      );
    } catch (error: any) {
      notifyError(error.message);
      resetField(InputNames.NEW_PASSWORD);
      resetField(InputNames.PASSWORD);
      throw error;
    }
  };

  const handleSubmitForm = async (data) => {
    try {
      await handleCheckPassword(data);
      editPassword({
        id: `${user?.id}`,
        password: data[InputNames.NEW_PASSWORD],
      });
      resetField(InputNames.NEW_PASSWORD);
      resetField(InputNames.PASSWORD);
    } catch {}
  };

  useEffect(() => {
    if (isError && error) {
      notifyError(ErrorNotifies.CANNOT_CHANGE_PASSWORD);
    }
  }, [error, isError]);

  return (
    <Wrapper className="flex flex-col items-start">
      <PageWrapper title="Изменение пароля" isTop={true}>
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
        <Input
          placeholder="Новый пароль"
          type="password"
          properties={{
            ...register(InputNames.NEW_PASSWORD, {
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
          name={InputNames.NEW_PASSWORD}
          errors={errors}
        />
        {isLoading ? (
          <Spinner className="flex w-full justify-center" />
        ) : (
          <Button onClick={handleSubmit(handleSubmitForm)}>Сохранить</Button>
        )}
      </PageWrapper>
    </Wrapper>
  );
};
