import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useEditChapter from "../../../../../api/account/useEditChapter";
import { getChapterText } from "../../../../../utils/utils";
import { Button } from "../../../../ui/buttons/Button";
import { PageWrapper } from "../../../../ui/wrappers/PageWrapper";
import { Input } from "../../../../ui/inputs/Input";
import { Textarea } from "../../../../ui/Textarea";
import useChapter from "../../../../../api/account/useChapter";
import { Spinner } from "../../../../ui/Spinner";

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
