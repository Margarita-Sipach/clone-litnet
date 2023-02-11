import React from "react";
import Button from "../../../ui/button";
import { FileInput } from "../../../ui/file-input";
import { PageWrapper } from "../../../ui/page-wrapper";
import { PrimaryInput } from "../../../ui/primary-input";
import { PrimaryTextarea } from "../../../ui/primary-textarea";
import { Wrapper } from "../../../ui/wrapper";

const AccountEdit = () => {
  return (
    <Wrapper className="flex flex-col items-start">
      <PageWrapper title="Редактирование профиля" isTop={true}>
        <FileInput className="h-32 w-32"></FileInput>
        <PrimaryInput attributes={{ placeholder: "Логин" }} />
        <PrimaryInput attributes={{ placeholder: "Email", type: "email" }} />
        <PrimaryInput
          attributes={{ placeholder: "Пароль", type: "password" }}
        />
        <PrimaryTextarea attributes={{ placeholder: "О себе" }} />
        <Button>Сохранить</Button>
      </PageWrapper>
      <PageWrapper title="Редактирование настроек для чтения" isTop={true}>
        <div className="flex flex-col">
          <p className="mb-2 text-lg">Разбить на страницы?</p>
          <div className="flex gap-x-2">
            <input type="radio" name="view" value="yes" id="yes" checked />
            <label htmlFor="yes">Да</label>
          </div>
          <div className="flex gap-x-2">
            <input type="radio" name="view" value="no" id="no" />
            <label htmlFor="no">Нет</label>
          </div>
        </div>
      </PageWrapper>
    </Wrapper>
  );
};

export default AccountEdit;
