import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { CommentProps } from "../../../types/types";
import CommentSection from "../../modules/comment-section";
import { ElementWrapper } from "../../ui/element-wrapper";
import { Icon } from "../../ui/icon";
import { PageWrapper } from "../../ui/page-wrapper";
import { PrimaryButton } from "../../ui/primary-button";
import { PrimarySelect } from "../../ui/primary-select";
import { Rating } from "../../ui/rating";
import { SecondaryButton } from "../../ui/secodary-button";
import { Wrapper } from "../../ui/wrapper";

type Params = {
  slug: string;
  comments: CommentProps[];
};

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

const comments = [
  {
    image: "https://rust.litnet.com/uploads/covers/220/1451306083_.jpg",
    name: "kkkk k k k k ",
    date: "20.11.2222",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi cupiditate, et aperiam ut quidem ipsum corporis harum labore veritatis sunt repellendus. Dolore quis dolorem iste repellendus sint! Sint, id!",
  },
];

const BookPage = () => {
  // let { slug } = useParams<Params>();

  return (
    <Wrapper>
      <PageWrapper title="" isTop={true}>
        <ElementWrapper className="flex gap-x-5">
          <img src={book.img} alt="" className="w-1/3" />
          <div className="flex w-full flex-col justify-between">
            <div className="flex flex-grow gap-x-10">
              <div className="relative w-1/2">
                <h4 className="mb-1 text-2xl">{book.title}</h4>
                <div className="mb-1">{book.author}</div>
                <div className="mb-3 flex flex-wrap gap-x-2">
                  {book.categories.map((item) => (
                    <div className="max-w-full truncate rounded-md bg-slate-200 p-1 text-sm text-base">
                      {item}
                    </div>
                  ))}
                </div>
                <PrimaryButton className="absolute bottom-0 w-full">
                  Читать онлайн
                </PrimaryButton>
              </div>
              <div className="relative mt-2 w-1/2">
                <Rating rating={book.rating} />
                <div className="flex items-center gap-x-3">
                  <Icon title={book.readAmount} icon={<GiBookshelf />} />
                  <Icon
                    title={book.commentAmount}
                    icon={<AiOutlineComment />}
                  />
                </div>
                <SecondaryButton className="absolute bottom-0 w-full">
                  Добавить
                </SecondaryButton>
              </div>
            </div>
            <div className="my-5 h-[1px] w-full bg-slate-300"></div>
            <PrimarySelect
              title="Содержание"
              options={[1, 2, 3, 4, 5, 5]}
            ></PrimarySelect>
          </div>
        </ElementWrapper>
        <ElementWrapper className="mb-5">
          <h3 className="mb-2 text-xl">Аннотация</h3>
          <div>{book.annotation}</div>
        </ElementWrapper>
        <CommentSection comments={comments} />
      </PageWrapper>
    </Wrapper>
  );
};

export default BookPage;
