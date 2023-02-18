import React from "react";
import Button from "../../../ui/button";
import { PageWrapper } from "../../../ui/page-wrapper";
import { PrimaryInput } from "../../../ui/primary-input";
import { PrimaryTextarea } from "../../../ui/primary-textarea";
import { Wrapper } from "../../../ui/wrapper";

export const AccountAddBlog = () => {
  return (
    <Wrapper>
      <PageWrapper title="Новый блог">
        <PrimaryInput placeholder="Заголовок блога" required={true} />
        <PrimaryTextarea placeholder="Содержание блога" required={true} />
        <Button>Сохранить</Button>
      </PageWrapper>
    </Wrapper>
  );
};
