import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCreateChapter, useFetchBook } from "../../../../../hooks";
import Button from "../../../../ui/button";
import { PageWrapper } from "../../../../ui/page-wrapper";
import { PrimaryInput } from "../../../../ui/primary-input";
import { PrimaryTextarea } from "../../../../ui/primary-textarea";

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
      <PrimaryInput
        placeholder="Название главы"
        value={title}
        onChange={(e) => setTitle(e?.target.value || "")}
      />
      <PrimaryTextarea
        placeholder="Содержание главы"
        value={text}
        onChange={(e) => setText(e?.target.value || "")}
      ></PrimaryTextarea>
      <Button onClick={handleSubmitForm}>Сохранить</Button>
    </PageWrapper>
  ) : (
    <h1>Loading....</h1>
  );
};
