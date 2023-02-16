import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BookElement } from "../../../ui/book-element";
import Button from "../../../ui/button";
import { ElementWrapper } from "../../../ui/element-wrapper";
import { PageWrapper } from "../../../ui/page-wrapper";

const book = {
  img: "https://rust.litnet.com/uploads/covers/220/1451306083_.jpg",
  title: "Задача выжить",
  author: "Михаил Атаманов",
  categories: ["Боевик", "Фантастика"],
  annotation:
    "Представьте, что по дороге на работу вы задремали в маршрутке. Вас разбудили крики ужаса, а вокруг творится невесть что - одна за другой взрываются машины на проспекте, люди сгорают словно свечки. А над всем этим хаосом и смертью в небе кружит таинственный боевой корабль треугольной формы. И вот очередь взлететь на воздух доходит и до вашей маршрутки... Вот именно об этом данное произведение",
  commentAmount: 55,
  readAmount: 234,
  rating: 8.9,
};

const chapters = [
  {
    id: "1",
    title: "G 1",
  },
  {
    id: "2",
    title: "G 2",
  },
  {
    id: "3",
    title: "G 3",
  },
  {
    id: "4",
    title: "G 4",
  },
];

export const AccountEditBook = () => {
  return (
    <PageWrapper title="" isTop={true}>
      <BookElement {...book} />
      <div className="mb-5 flex flex-col gap-y-5">
        {chapters.map((item) => (
          <ElementWrapper key={item.id} className="flex justify-between">
            <div>{item.title}</div>
            <Link to={`../chapter/${item.id}`}>
              <AiOutlineEdit />
            </Link>
          </ElementWrapper>
        ))}
      </div>
      <div className="flex w-full gap-x-5">
        <Link className="w-1/2" to="../chapter">
          <Button className="w-full">Добавить новую главу</Button>
        </Link>
        <Link className="w-1/2" to="../book-info/1">
          <Button className="w-full">Редактировать информацию о книге</Button>
        </Link>
      </div>
    </PageWrapper>
  );
};
