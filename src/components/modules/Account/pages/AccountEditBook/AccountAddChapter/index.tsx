import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchBook } from "../../../../../../hooks";
import useCreateChapter from "../../../api/useCreateChapter";
import Button from "../../../../../ui/Button";
import { PageWrapper } from "../../../../../ui/PageWrapper";
import { Input } from "../../../../../ui/Input";
import { Textarea } from "../../../../../ui/Textarea";

export const AccountAddChapter = () => {
  const { bookId } = useParams();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const { createChapter } = useCreateChapter();
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
      <Button onClick={handleSubmitForm}>Сохранить</Button>
    </PageWrapper>
  ) : (
    <h1>Loading....</h1>
  );
};
