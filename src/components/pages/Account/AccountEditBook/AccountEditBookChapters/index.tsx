import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../../../../ui/button";
import { ElementWrapper } from "../../../../ui/element-wrapper";

const chapters = [
  {
    title: "G 1",
  },
  {
    title: "G 2",
  },
  {
    title: "G 3",
  },
  {
    title: "G 4",
  },
];

export const AccountEditBookChapters = () => {
  return (
    <div>
      <div className="mb-5 flex flex-col gap-y-5">
        {chapters.map((item) => (
          <ElementWrapper key={item.title} className="flex justify-between">
            <div>{item.title}</div>
            <Link to="../../chapter/1">
              <AiOutlineEdit />
            </Link>
          </ElementWrapper>
        ))}
      </div>
      <Link to="../../chapter">
        <Button>Добавить новую главу</Button>
      </Link>
    </div>
  );
};
