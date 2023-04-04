import React, { useState, ChangeEvent, useEffect } from "react";
import { Button } from "../../../ui/buttons/Button";
import { FileInput } from "../../../ui/inputs/FileInput";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Input } from "../../../ui/inputs/Input";
import { Textarea } from "../../../ui/Textarea";
import useCreateContest from "../../../../hooks/account/useCreateContest";
import { notifyError, useFetchGenres } from "../../../../hooks";
import { Spinner } from "../../../ui/Spinner";
import { useForm } from "react-hook-form";
import {
  ErrorInputMessages,
  ErrorNotifies,
  InputNames,
} from "../../../../utils/formUtils";
import { PrimarySelect } from "../../../ui/PrimarySelect";
import { isBefore } from "date-fns";

export const AccountAddContest = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur" });
  const [file, setFile] = useState<File | null>(null);
  const { genres } = useFetchGenres();
  const { mutate, isLoading, error, isError } = useCreateContest();

  const handleSetFile = (e?: ChangeEvent<HTMLInputElement>) => {
    const files = (e?.target as HTMLInputElement)?.files;
    if (files) {
      setFile(files[0]);
    }
  };

  const handleSubmitForm = (data) => {
    mutate({ ...data, img: file });
  };

  const validateDate = (date: Date) => {
    if (!date) {
      return ErrorInputMessages.DATE;
    }

    const currentDate = new Date();
    const selectedDate = new Date(date);

    if (isBefore(selectedDate, currentDate)) {
      return ErrorInputMessages.BEFORE_DATE;
    }

    return true;
  };

  useEffect(() => {
    if (isError && error) {
      notifyError(ErrorNotifies.CONTEST_ERROR);
    }
  }, [error, isError]);

  return (
    <PageWrapper title="Новый конкурс" className="gap-y-10">
      <div className="flex flex-col gap-x-5 sm:flex-row">
        <FileInput
          className="mb-5 h-72 w-52 sm:mb-0"
          onChange={handleSetFile}
        />
        <div className="flex flex-grow flex-col gap-y-5">
          <Input
            placeholder="Название конкурса"
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
          {genres ? (
            <div className="flex flex-col">
              <span className="mb-3 text-xl">Жанр</span>
              <PrimarySelect
                title="Жанр"
                properties={{
                  ...register(InputNames.GENRE, {
                    required: ErrorInputMessages.REQUIRED,
                    validate: (value) =>
                      [...genres.map((g) => g.name)].includes(value)
                        ? true
                        : ErrorInputMessages.SELECT_GENRE,
                  }),
                }}
                name={InputNames.GENRE}
                errors={errors}
                options={genres.map((g) => g.name)}
              />
            </div>
          ) : genres ? (
            <p>loading genres...</p>
          ) : (
            <p>Error loading genres</p>
          )}
          <div className="flex flex-col">
            <span className="mb-3 text-xl">Работы принимаются</span>
            <div className="flex items-center gap-x-10">
              <div className="flex items-center gap-x-5">
                до
                <Input
                  type="date"
                  properties={{
                    ...register(InputNames.DATE, {
                      required: ErrorInputMessages.REQUIRED,
                      validate: validateDate,
                    }),
                    valueAsDate: true,
                  }}
                  name={InputNames.DATE}
                  errors={errors}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Textarea
        placeholder="Описание конкурса"
        properties={{
          ...register(InputNames.DESCRIPTION, {
            maxLength: {
              value: 1000,
              message: ErrorInputMessages.TEXT_LENGTH,
            },
          }),
        }}
        name={InputNames.DESCRIPTION}
        errors={errors}
      />
      <Input
        type="number"
        placeholder="Приз"
        properties={{
          ...register(InputNames.PRIZE, {
            required: ErrorInputMessages.REQUIRED,
            min: {
              value: 0,
              message: ErrorInputMessages.PRIZE_SIZE,
            },
            max: {
              value: 99999,
              message: ErrorInputMessages.PRIZE_SIZE,
            },
          }),
        }}
        name={InputNames.PRIZE}
        errors={errors}
      />
      <Input
        type="number"
        placeholder="Количество символов"
        properties={{
          ...register(InputNames.SYMBOLS, {
            required: ErrorInputMessages.REQUIRED,
            min: {
              value: 0,
              message: ErrorInputMessages.SYMBOLS_SIZE,
            },
          }),
        }}
        name={InputNames.SYMBOLS}
        errors={errors}
      />
      {isLoading ? (
        <Spinner className="flex w-full justify-center" />
      ) : (
        <Button onClick={handleSubmit(handleSubmitForm)}>Сохранить</Button>
      )}
    </PageWrapper>
  );
};
