import { AiOutlineEdit } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useFetchChapters } from "../../../../hooks";
import { ElementWrapper } from "../../../ui/element-wrapper";
import { PageWrapper } from "../../../ui/page-wrapper";
import { PrimaryLink } from "../../../ui/primary-link";

export const AccountEditBook = () => {
  const { bookId } = useParams();
  const { chapters } = useFetchChapters(`${bookId}`);
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
