import { useParams } from "react-router-dom";
import {
  useEditBook,
  useFetchBook,
  useFetchGenres,
} from "../../../../../hooks";
import { useState, ChangeEvent, useEffect } from "react";
import Button from "../../../../ui/button";
import { FileInput } from "../../../../ui/file-input";
import { PageWrapper } from "../../../../ui/page-wrapper";
import { PrimaryInput } from "../../../../ui/primary-input";
import { PrimarySelect } from "../../../../ui/primary-select";
import { PrimaryTextarea } from "../../../../ui/primary-textarea";

export const AccountEditBookInfo = () => {
  const { bookId } = useParams();
  const { book } = useFetchBook(`${bookId}`);
  const { genres } = useFetchGenres();
  const { editBook } = useEditBook(`${bookId}`);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [firstSelectedGenre, setFirstSelectedGenre] = useState("");
  const [secondSelectedGenre, setSecondSelectedGenre] = useState("");
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => book && setTitle(book.title), [book]);
  useEffect(
    () =>
      book &&
      setFirstSelectedGenre(book.genres.length > 0 ? book.genres[0].name : ""),
    [book]
  );

  useEffect(
    () =>
      book &&
      setSecondSelectedGenre(book.genres.length > 1 ? book.genres[1].name : ""),
    [book]
  );

  const createFormData = () => {
    const formData = new FormData();
    formData.append("title", title);
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
    editBook(createFormData());
  };

  return book && genres ? (
    <PageWrapper title="Редактировать информацию о книге">
      <div className="flex gap-x-5">
        <FileInput className="h-52 w-40" onChange={handleSetFile} />
        <div className="flex flex-grow flex-col gap-y-5">
          <PrimaryInput
            value={title}
            placeholder="Название книги"
            required={true}
            onChange={(e) => setTitle(e?.target.value || "")}
          />
          <PrimarySelect
            title="Жанр 1"
            options={genres.map((g) => g.name)}
            defaultOption={book.genres.length > 0 ? book.genres[0].name : ""}
            onChange={(e) => setFirstSelectedGenre(e.target.value || "")}
          />
          <PrimarySelect
            title="Жанр 2"
            options={genres.map((g) => g.name)}
            defaultOption={book.genres.length > 1 ? book.genres[1].name : ""}
            onChange={(e) => setSecondSelectedGenre(e.target.value || "")}
          />
        </div>
      </div>
      <PrimaryTextarea
        placeholder="Аннотация"
        required={true}
        value={description}
        onChange={(e) => setDescription(e?.target.value || "")}
      />
      <Button onClick={handleSubmitForm}>Сохранить</Button>
    </PageWrapper>
  ) : (
    <h1>Loading...</h1>
  );
};
