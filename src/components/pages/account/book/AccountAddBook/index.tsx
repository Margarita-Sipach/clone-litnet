import React, { ChangeEvent, useState, useEffect } from "react";
import { notifyError, useFetchGenres } from "../../../../../hooks";
import { useUserContext } from "../../../../context/userContext";
import { Button } from "../../../../ui/buttons/Button";
import { FileInput } from "../../../../ui/inputs/FileInput";
import { PageWrapper } from "../../../../ui/wrappers/PageWrapper";
import { Input } from "../../../../ui/inputs/Input";
import { PrimarySelect } from "../../../../ui/PrimarySelect";
import { Textarea } from "../../../../ui/Textarea";
import { Spinner } from "../../../../ui/Spinner";
import { useForm } from "react-hook-form";
import {
  ErrorInputMessages,
  ErrorNotifies,
  InputNames,
  createFormData,
} from "../../../../../utils/formUtils";
import { useCreateBook } from "../../../../../hooks/account/useCreateBook";

export const AccountAddBook = () => {
  const { user } = useUserContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur" });
  const [file, setFile] = useState<File | null>(null);
  const { genres } = useFetchGenres();
  const { createBook, isLoading, isError, error } = useCreateBook();

  const createCustomFormData = (data) => {
    const formData = createFormData(data);
    formData.append("userId", `${user?.id}`);
    formData.append(
      "genres",
      `${data[InputNames.GENRE_FIRST]} ${data[InputNames.GENRE_SECOND]}`
    );
    if (file) formData.append("img", file);
    return formData;
  };

  const handleSetFile = (e?: ChangeEvent<HTMLInputElement>) => {
    const files = (e?.target as HTMLInputElement)?.files;
    if (files) setFile(files[0]);
  };

  const handleSubmitForm = (data) => {
    createBook(createCustomFormData(data));
  };

  useEffect(() => {
    if (isError && error) {
      notifyError(ErrorNotifies.BOOK_EXISTS);
    }
  }, [error, isError]);

  return genres ? (
    <PageWrapper title="Новая книга">
      <div className="flex flex-col gap-x-5 sm:flex-row">
        <FileInput
          className="mb-5 h-52 w-40 sm:mb-0"
          onChange={handleSetFile}
        />
        <div className="flex flex-grow flex-col gap-y-5">
          <Input
            placeholder="Название книги"
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
          <PrimarySelect
            title="Жанр 1"
            properties={{
              ...register(InputNames.GENRE_FIRST, {
                required: ErrorInputMessages.REQUIRED,
                validate: (value, formData) =>
                  value !== formData[InputNames.GENRE_SECOND]
                    ? [...genres.map((g) => g.name)].includes(value)
                      ? true
                      : ErrorInputMessages.SELECT_GENRE
                    : ErrorInputMessages.EQUALS_GENRES,
              }),
            }}
            name={InputNames.GENRE_FIRST}
            errors={errors}
            options={genres.map((g) => g.name)}
          />
          <PrimarySelect
            title="Жанр 2"
            properties={{
              ...register(InputNames.GENRE_SECOND, {
                required: ErrorInputMessages.REQUIRED,
                validate: (value, formData) =>
                  value !== formData[InputNames.GENRE_FIRST]
                    ? [...genres.map((g) => g.name)].includes(value)
                      ? true
                      : ErrorInputMessages.SELECT_GENRE
                    : ErrorInputMessages.EQUALS_GENRES,
              }),
            }}
            name={InputNames.GENRE_SECOND}
            errors={errors}
            options={genres.map((g) => g.name)}
          />
        </div>
      </div>
      <Textarea
        required={true}
        placeholder="Аннотация"
        properties={{
          ...register(InputNames.DESCRIPTION, {
            maxLength: {
              value: 400,
              message: ErrorInputMessages.TEXT_LENGTH,
            },
          }),
        }}
        name={InputNames.DESCRIPTION}
        errors={errors}
      />
      {isLoading ? (
        <Spinner className="flex w-full justify-center" />
      ) : (
        <Button onClick={handleSubmit(handleSubmitForm)}>Сохранить</Button>
      )}
    </PageWrapper>
  ) : (
    <Spinner className="flex w-full justify-center" />
  );
};
