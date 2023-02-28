import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useEditChapter from "../../../api/useEditChapter";
import { getChapterText } from "../../../../../../utils/utils";
import Button from "../../../../../ui/Button";
import { PageWrapper } from "../../../../../ui/PageWrapper";
import { Input } from "../../../../../ui/Input";
import { Textarea } from "../../../../../ui/Textarea";
import useChapter from "../../../api/useChapter";
import Spinner from "../../../../../ui/Spinner";

export const AccountEditChapter = () => {
  const { chapterId } = useParams();
  const { chapter } = useChapter(`${chapterId}`);
  const { editChapter, isLoading } = useEditChapter(`${chapterId}`);
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
    <h1>Loading...</h1>
  );
};
