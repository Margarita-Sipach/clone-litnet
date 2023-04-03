import React, { useEffect } from "react";
import { Button } from "../../../ui/buttons/Button";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Input } from "../../../ui/inputs/Input";
import { Textarea } from "../../../ui/Textarea";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { useUserContext } from "../../../context/userContext";
import { notifyError } from "../../../../hooks";
import { Spinner } from "../../../ui/Spinner";
import { useForm } from "react-hook-form";
import {
  ErrorInputMessages,
  ErrorNotifies,
  InputNames,
} from "../../../../utils/formUtils";
import { useCreateBlog } from "../../../../hooks/account/useCreateBlog";

export const AccountAddBlog = () => {
  const { user } = useUserContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur" });
  const { mutate, error, isError, isLoading } = useCreateBlog(
    user!.id.toString()
  );

  const handleSubmitForm = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isError && error) {
      notifyError(ErrorNotifies.BLOG_EXISTS);
    }
  }, [error, isError]);

  return (
    <Wrapper>
      <PageWrapper title="Новый блог">
        <Input
          placeholder="Заголовок блога"
          properties={{
            ...register(InputNames.TITLE, {
              required: ErrorInputMessages.REQUIRED,
              minLength: {
                value: 3,
                message: ErrorInputMessages.TITLE_LENGTH,
              },
              maxLength: {
                value: 24,
                message: ErrorInputMessages.TITLE_LENGTH,
              },
            }),
          }}
          name={InputNames.TITLE}
          errors={errors}
        />
        <Textarea
          placeholder="Содержание блога"
          properties={{
            ...register(InputNames.TEXT, {
              maxLength: {
                value: 400,
                message: ErrorInputMessages.TEXT_LENGTH,
              },
            }),
          }}
          name={InputNames.TEXT}
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
