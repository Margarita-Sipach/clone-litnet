import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEditChapter, useFetchChapter } from "../../../../../hooks";
import { getChapterText } from "../../../../../utils/utils";
import Button from "../../../../ui/button";
import { PageWrapper } from "../../../../ui/page-wrapper";
import { PrimaryInput } from "../../../../ui/primary-input";
import { PrimaryTextarea } from "../../../../ui/primary-textarea";

export const AccountEditChapter = () => {
  const { chapterId } = useParams();
  const { chapter } = useFetchChapter(`${chapterId}`);
  const { editChapter } = useEditChapter(`${chapterId}`);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => chapter && setTitle(chapter.title), [chapter]);
  useEffect(() => chapter && setText(getChapterText(chapter) || ""), [chapter]);

  const createRequestBody = () => {
    return JSON.stringify({
      text,
      title,
    });
  };

  const handleSubmitForm = () => {
    editChapter(createRequestBody());
  };

  return chapter ? (
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
    <h1>Loading...</h1>
  );
};
