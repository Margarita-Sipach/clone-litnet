import React from "react";
import { useForm } from "react-hook-form";
import { checkUserPassword } from "../../../../../api/service";
import { useUserContext } from "../../../../context/userContext";
import { Button } from "../../../../ui/buttons/Button";
import { PageWrapper } from "../../../../ui/wrappers/PageWrapper";
import { Input } from "../../../../ui/inputs/Input";
import { Wrapper } from "../../../../ui/wrappers/Wrapper";
import { Spinner } from "../../../../ui/Spinner";
import {
  createFormData,
  ErrorInputMessages,
  InputNames,
} from "../../../../../utils/formUtils";
import { useEditPassword } from "../../../../../hooks/account/useEditPassword";

export const AccountEditPassword = () => {
  const { user } = useUserContext();
  const { editPassword, isLoading } = useEditPassword();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  const handleSubmitForm = async (data) => {
    await checkUserPassword(
      createFormData({
        email: `${user?.email}`,
        password: data[InputNames.PASSWORD],
      })
    );
    editPassword({
      id: `${user?.id}`,
      password: data[InputNames.NEW_PASSWORD],
    });
  };

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
