import React, { useState } from "react";
import Button from "../../../ui/button";
import { FileInput } from "../../../ui/file-input";
import { PageWrapper } from "../../../ui/page-wrapper";
import { PrimaryInput } from "../../../ui/primary-input";
import { PrimarySelect } from "../../../ui/primary-select";
import { PrimaryTextarea } from "../../../ui/primary-textarea";
import { useGenres } from "../../../../hooks";
import { useUserContext } from "../../../context/userContext";
import { useMutation } from "@tanstack/react-query";
import { createBook } from "../../../../api/data";

export const AccountAddBook = () => {
  const { user } = useUserContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre1, setGenre1] = useState("");
  const [genre2, setGenre2] = useState("");

  const genres = useGenres().data;

  const createBookMutation = useMutation({
    mutationKey: ["book"],
    mutationFn: () =>
      createBook(
        title,
        description,
        user!.id.toString(),
        `${genre1} ${genre2}`
      ),
  });
  return (
    <PageWrapper title="Новая книга">
      <div className="flex gap-x-5">
        <FileInput className="h-52 w-40" />
        <div className="flex flex-grow flex-col gap-y-5">
          <PrimaryInput
            required={true}
            value={title}
            placeholder="Название книги"
            onChange={(e) => setTitle(e?.target.value || "")}
          />
          {genres ? (
            <>
              <PrimarySelect
                onChange={(e) => setGenre1(e!.target.value)}
                title="Жанр 1"
                options={genres.map((genre) => genre.name)}
              />
              <PrimarySelect
                onChange={(e) => setGenre2(e!.target.value)}
                title="Жанр 2"
                options={genres.map((genre) => genre.name)}
              />
            </>
          ) : (
            <p>loading genres...</p>
          )}
        </div>
      </div>
      <PrimaryTextarea
        value={description}
        onChange={(e) => setDescription(e!.target.value)}
        placeholder="Аннотация"
        required={true}
      />
      <Button onClick={() => createBookMutation.mutate()}>Сохранить</Button>
      {createBookMutation.isSuccess && <p>book created</p>}
      {createBookMutation.isLoading && <p>creating book...</p>}
      {createBookMutation.isError && <p>error occurred</p>}
    </PageWrapper>
  );
};
