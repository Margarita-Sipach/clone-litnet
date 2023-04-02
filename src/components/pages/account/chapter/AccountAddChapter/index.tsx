import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchBook } from "../../../../../hooks";
import useCreateChapter from "../../../../../api/account/useCreateChapter";
import { Button } from "../../../../ui/buttons/Button";
import { PageWrapper } from "../../../../ui/wrappers/PageWrapper";
import { Input } from "../../../../ui/inputs/Input";
import { Textarea } from "../../../../ui/Textarea";
import { Spinner } from "../../../../ui/Spinner";

export const AccountAddChapter = () => {
  const { bookId } = useParams();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const { createChapter, isLoading } = useCreateChapter();
  const { book } = useFetchBook(`${bookId}`);

  const createRequestBody = () => {
    return JSON.stringify({
      text,
      title,
      bookId: book?.id,
    });
  };

  const handleSubmitForm = () => {
    createChapter(createRequestBody());
  };

  return book ? (
    <PageWrapper title="Добавить новую главу" isTop={false}>
      <Input
        placeholder="Название главы"
        value={title}
        onChange={(e) => setTitle(e?.target.value || "")}
      />
      <Textarea
        placeholder="Содержание главы"
        value={text}
        onChange={(e) => setText(e?.target.value || "")}
      ></Textarea>
      {isLoading ? (
        <Spinner className="flex w-full justify-center" />
      ) : (
        <Button onClick={handleSubmitForm}>Сохранить</Button>
      )}
    </PageWrapper>
  ) : (
    <h1>Loading....</h1>
  );
};
