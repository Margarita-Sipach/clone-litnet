import React from "react";
import Button from "../../../ui/button";
import { FileInput } from "../../../ui/file-input";
import { PageWrapper } from "../../../ui/page-wrapper";
import { PrimaryInput } from "../../../ui/primary-input";
import { PrimarySelect } from "../../../ui/primary-select";
import { PrimaryTextarea } from "../../../ui/primary-textarea";

export const AccountAddContest = () => {
  return (
    <PageWrapper title="Новый конкурс" className="gap-y-10">
      <div className="flex gap-x-5">
        <FileInput className="h-72 w-52" />
        <div className="flex flex-grow flex-col gap-y-5">
          <PrimaryInput attributes={{ placeholder: "Название конкурса" }} />
          <select multiple className="border px-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <option key={item} value={item} className="py-1">
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mb-3 text-xl">Работы принимаются</span>
        <div className="flex items-center gap-x-10">
          <div className="flex items-center gap-x-5">
            от
            <PrimaryInput attributes={{ type: "date" }} />
          </div>
          <div className="flex items-center gap-x-5">
            до
            <PrimaryInput attributes={{ type: "date" }} />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mb-3 text-xl">Оглашение результатов</span>
        <div className="flex items-center gap-x-5">
          <PrimaryInput attributes={{ type: "date" }} />
        </div>
      </div>
      <PrimaryTextarea attributes={{ placeholder: "Описание конкурса" }} />
      <PrimaryTextarea attributes={{ placeholder: "Приз" }} />
      <PrimaryTextarea attributes={{ placeholder: "Правила конкурса" }} />
      <Button>Сохранить</Button>
    </PageWrapper>
  );
};
