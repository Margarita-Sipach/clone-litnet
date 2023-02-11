import React from "react";
import Button from "../../../ui/button";
import { FileInput } from "../../../ui/file-input";
import { PageWrapper } from "../../../ui/page-wrapper";
import { PrimaryInput } from "../../../ui/primary-input";
import { Wrapper } from "../../../ui/wrapper";

const AccountEdit = () => {
  return (
    <Wrapper className="flex flex-col items-start">
      <PageWrapper title="Редактирование профиля" isTop={true}>
        <FileInput className="h-32 w-32"></FileInput>
        <PrimaryInput attributes={{ placeholder: "Логин" }} />
        <PrimaryInput attributes={{ placeholder: "Email" }} />
        <PrimaryInput attributes={{ placeholder: "Пароль" }} />
        <textarea
          className="h-60 rounded-md border-[1px] bg-slate-100 py-2 px-4 text-slate-500 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none sm:text-sm sm:placeholder:text-sm lg:text-lg lg:placeholder:text-lg"
          placeholder="О себе"
        />
        <Button>Сохранить</Button>
      </PageWrapper>
      <PageWrapper title="Редактирование настроек для чтения" isTop={true}>
        <div className="flex flex-col">
          <p className="text-lg mb-2">Разбить на страницы?</p>
          <div className="flex gap-x-2">
            <input type="radio" name="view" value="yes" id="yes" checked/>
            <label htmlFor="yes">Да</label>
          </div>
          <div className="flex gap-x-2">
            <input type="radio" name="view" value="no" id="no" />
            <label htmlFor="no">Нет</label>
          </div>

          {/* <label for="contactChoice1">Email</label>

    <input type="radio" id="contactChoice2"
     name="contact" value="phone"></input> */}
        </div>
      </PageWrapper>
    </Wrapper>
  );
};

export default AccountEdit;
