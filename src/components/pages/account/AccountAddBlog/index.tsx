import React, { useEffect, useState } from "react";
import { Button } from "../../../ui/buttons/Button";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Input } from "../../../ui/inputs/Input";
import { Textarea } from "../../../ui/Textarea";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { useUserContext } from "../../../context/userContext";
import { notifyError, notifySuccess } from "../../../../hooks";
import useAddBlog from "../../../../hooks/account/useCreateBlog";
import { Spinner } from "../../../ui/Spinner";

export const AccountAddBlog = () => {
  const { user } = useUserContext();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { mutate, error, isError, isLoading, status, isSuccess } = useAddBlog({
    userId: user!.id.toString(),
    text,
    title,
  });

  useEffect(() => {
    if (isSuccess) {
      notifySuccess("blog created!");
    } else if (isError) {
      notifyError(error.response!.data.message);
    }
  }, [status]);

  return (
    <Wrapper>
      <PageWrapper title="Новый блог">
        <Input
          value={title}
          onChange={(e) => setTitle(e?.target.value || "")}
          placeholder="Заголовок блога"
          required={true}
        />
        <Textarea
          value={text}
          onChange={(e) => setText(e?.target.value || "")}
          placeholder="Содержание блога"
          required={true}
        />
        {isLoading ? (
          <Spinner className="flex w-full justify-center" />
        ) : (
          <Button onClick={() => mutate()}>Сохранить</Button>
        )}
      </PageWrapper>
    </Wrapper>
  );
};
