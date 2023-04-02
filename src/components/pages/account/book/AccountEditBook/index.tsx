import { AiOutlineEdit } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import useChapters from "../../../../../hooks/account/useChapters";
import { ElementWrapper } from "../../../../ui/wrappers/ElementWrapper";
import { PageWrapper } from "../../../../ui/wrappers/PageWrapper";
import { PrimaryLink } from "../../../../ui/PrimaryLink";

export const AccountEditBook = () => {
  const { bookId } = useParams();
  const { chapters } = useChapters(`${bookId}`);
  return chapters ? (
    <PageWrapper title="" isTop={false}>
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
        <PrimaryLink className="w-1/2 text-center" path="../chapter">
          Добавить новую главу
        </PrimaryLink>
        <PrimaryLink className="w-1/2 text-center" path="../book-info">
          Редактировать информацию о книге
        </PrimaryLink>
      </div>
    </PageWrapper>
  ) : (
    <h1>Loading...</h1>
  );
};
