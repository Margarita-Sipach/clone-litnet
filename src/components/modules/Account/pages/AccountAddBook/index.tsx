import React, { ChangeEvent, useState } from "react";
import { useFetchGenres } from "../../../../../hooks";
import { useUserContext } from "../../../../context/userContext";
import Button from "../../../../ui/Button";
import { FileInput } from "../../../../ui/FileInput";
import { PageWrapper } from "../../../../ui/PageWrapper";
import { Input } from "../../../../ui/Input";
import { PrimarySelect } from "../../../../ui/PrimarySelect";
import { Textarea } from "../../../../ui/Textarea";
import useCreateBook from "../../api/useCreateBook";

export const AccountAddBook = () => {
  const { user } = useUserContext();
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [firstSelectedGenre, setFirstSelectedGenre] = useState("");
  const [secondSelectedGenre, setSecondSelectedGenre] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { genres } = useFetchGenres();
  const { createBook } = useCreateBook();

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
      <div className="flex gap-x-5">
        <FileInput className="h-52 w-40" onChange={handleSetFile} />
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
      <Button onClick={handleSubmitForm}>Сохранить</Button>
    </PageWrapper>
  ) : (
    <h1>Loading...</h1>
  );
};
