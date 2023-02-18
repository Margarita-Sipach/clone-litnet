import React from "react";
import Button from "../../../../ui/button";
import { FileInput } from "../../../../ui/file-input";
import { PageWrapper } from "../../../../ui/page-wrapper";
import { PrimaryInput } from "../../../../ui/primary-input";
import { PrimarySelect } from "../../../../ui/primary-select";
import { PrimaryTextarea } from "../../../../ui/primary-textarea";

const book = {
  img: "https://rust.litnet.com/uploads/covers/220/1451306083_.jpg",
  title: "Задача выжить",
  categories: ["Боевик", "Фантастика"],
  annotation:
    "Представьте, что по дороге на работу вы задремали в маршрутке. Вас разбудили крики ужаса, а вокруг творится невесть что - одна за другой взрываются машины на проспекте, люди сгорают словно свечки. А над всем этим хаосом и смертью в небе кружит таинственный боевой корабль треугольной формы. И вот очередь взлететь на воздух доходит и до вашей маршрутки... Вот именно об этом данное произведение",
};

const categories = ["Классика", "Боевик", "Фантастика", "Роман"];

export const AccountEditBookInfo = () => {
  return (
    <PageWrapper title="Редактировать информацию о книге">
      <div className="flex gap-x-5">
        <FileInput className="h-52 w-40" defaultImage={book && book.img} />
        <div className="flex flex-grow flex-col gap-y-5">
          <PrimaryInput
            placeholder="Название книги"
            required={true}
            value={book.title}
          />
          <PrimarySelect
            title="Жанр 1"
            options={categories}
            defaultOption={book.categories[0]}
          />
          <PrimarySelect
            title="Жанр 2"
            options={categories}
            defaultOption={book.categories[1]}
          />
        </div>
      </div>
      <PrimaryTextarea
        placeholder="Аннотация"
        required={true}
        value={book.annotation}
      />
      <Button>Сохранить</Button>
    </PageWrapper>
  );
};
