import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BookElement } from "../../../ui/book-element";
import Button from "../../../ui/button";
import { ElementWrapper } from "../../../ui/element-wrapper";
import { PageWrapper } from "../../../ui/page-wrapper";

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
      {/* <BookElement book={book} /> */}
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
