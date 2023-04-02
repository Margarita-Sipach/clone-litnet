import React, { ChangeEvent, useState } from "react";
import { useFetchGenres } from "../../../../../hooks";
import { useUserContext } from "../../../../context/userContext";
import { Button } from "../../../../ui/buttons/Button";
import { FileInput } from "../../../../ui/inputs/FileInput";
import { PageWrapper } from "../../../../ui/wrappers/PageWrapper";
import { Input } from "../../../../ui/inputs/Input";
import { PrimarySelect } from "../../../../ui/PrimarySelect";
import { Textarea } from "../../../../ui/Textarea";
import useCreateBook from "../../../../../api/account/useCreateBook";
import { Spinner } from "../../../../ui/Spinner";

export const AccountAddBook = () => {
  const { user } = useUserContext();
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [firstSelectedGenre, setFirstSelectedGenre] = useState("");
  const [secondSelectedGenre, setSecondSelectedGenre] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { genres } = useFetchGenres();
  const { createBook, isLoading } = useCreateBook();

  const createFormData = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("userId", `${user?.id}`);
    formData.append("description", description);
    formData.append("genres", `${firstSelectedGenre} ${secondSelectedGenre}`);
    if (file) formData.append("img", file);
    return formData;
  };

  const handleSetFile = (e?: ChangeEvent<HTMLInputElement>) => {
    const files = (e?.target as HTMLInputElement)?.files;
    if (files) setFile(files[0]);
  };

  const handleSubmitForm = () => {
    createBook(createFormData());
  };

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
            required={true}
            onChange={(e) => setTitle(e?.target.value || "")}
          />
          <PrimarySelect
            title="Жанр 1"
            onChange={(e) => setFirstSelectedGenre(e.target.value || "")}
            options={genres.map((g) => g.name)}
          />
          <PrimarySelect
            title="Жанр 2"
            onChange={(e) => setSecondSelectedGenre(e.target.value || "")}
            options={genres.map((g) => g.name)}
          />
        </div>
      </div>
      <Textarea
        required={true}
        placeholder="Аннотация"
        onChange={(e) => setDescription(e?.target.value || "")}
      />
      {isLoading ? (
        <Spinner className="flex w-full justify-center" />
      ) : (
        <Button onClick={handleSubmitForm}>Сохранить</Button>
      )}
    </PageWrapper>
  ) : (
    <h1>Loading...</h1>
  );
};
