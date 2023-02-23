import React, { useState } from "react";
import Button from "../../../../ui/Button";
import { PageWrapper } from "../../../../ui/PageWrapper";
import { Input } from "../../../../ui/Input";
import { Textarea } from "../../../../ui/Textarea";
import { Wrapper } from "../../../../ui/Wrapper";
import { useUserContext } from "../../../../context/userContext";
import { useMutation } from "@tanstack/react-query";
import { createBlog } from "../../../../../api/data";

export const AccountAddBlog = () => {
  const { user } = useUserContext();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const blogMutation = useMutation({
    mutationFn: () => createBlog(title, text, user!.id.toString()),
    mutationKey: ["blog"],
  });
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
        <Button onClick={() => blogMutation.mutate()}>Сохранить</Button>
        {blogMutation.isSuccess && <p>blog created!</p>}
      </PageWrapper>
    </Wrapper>
  );
};
