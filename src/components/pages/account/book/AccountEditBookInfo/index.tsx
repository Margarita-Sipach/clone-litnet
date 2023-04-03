import { useParams } from "react-router-dom";
import {
  notifyError,
  useFetchBook,
  useFetchGenres,
} from "../../../../../hooks";
import useEditBook from "../../../../../hooks/account/useEditBook";
import { useState, ChangeEvent, useEffect } from "react";
import { Button } from "../../../../ui/buttons/Button";
import { FileInput } from "../../../../ui/inputs/FileInput";
import { PageWrapper } from "../../../../ui/wrappers/PageWrapper";
import { Input } from "../../../../ui/inputs/Input";
import { PrimarySelect } from "../../../../ui/PrimarySelect";
import { Textarea } from "../../../../ui/Textarea";
import { Spinner } from "../../../../ui/Spinner";
import { processImage } from "../../../../../utils/utils";
import { useForm } from "react-hook-form";
import {
  ErrorInputMessages,
  ErrorNotifies,
  InputNames,
} from "../../../../../utils/formUtils";

export const AccountEditBookInfo = () => {
  const { bookId } = useParams();
  const { book } = useFetchBook(`${bookId}`);
  const { genres } = useFetchGenres();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur" });
  const { editBook, isLoading, isError, error } = useEditBook(`${bookId}`);
  const [file, setFile] = useState<File | null>(null);

  const handleSetFile = (e?: ChangeEvent<HTMLInputElement>) => {
    const files = (e?.target as HTMLInputElement)?.files;
    if (files) setFile(files[0]);
  };

  const handleSubmitForm = (data) => {
    editBook({ ...data, img: file });
  };

  useEffect(() => {
    if (isError && error) {
      notifyError(ErrorNotifies.BOOK_EXISTS);
    }
  }, [error, isError]);

  return book && genres ? (
    <PageWrapper title="Редактировать информацию о книге">
      <div className="flex gap-x-5">
        <FileInput
          className="h-52 w-40"
          onChange={handleSetFile}
          defaultImage={processImage(book.img)}
        />
        <div className="flex flex-grow flex-col gap-y-5">
          <Input
            value={book.title}
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
            options={genres.map((g) => g.name)}
            defaultOption={book.genres.length > 0 ? book.genres[0].name : ""}
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
          />
          <PrimarySelect
            title="Жанр 2"
            options={genres.map((g) => g.name)}
            defaultOption={book.genres.length > 1 ? book.genres[1].name : ""}
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
          />
        </div>
      </div>
      <Textarea
        placeholder="Аннотация"
        required={true}
        value={book.description}
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
    <h1>Loading...</h1>
  );
};
