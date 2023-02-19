import React, { useState } from "react";
import { AiOutlineComment } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import { useParams } from "react-router-dom";
import CommentSection from "../../modules/comment-section";
import { ElementWrapper } from "../../ui/element-wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import { PrimarySelect } from "../../ui/primary-select";
import { Rating } from "../../ui/rating";
import Button from "../../ui/button";
import { Wrapper } from "../../ui/wrapper";
import { useQuery } from "@tanstack/react-query";
import { fetchBookById } from "../../../api/data";
import { processImage } from "../../../utils/utils";
import { useComments } from "../../../hooks";

type Params = {
  id: string;
};

const BookPage = () => {
  let { id } = useParams<Params>();
  const [addedBook, setAddedBook] = useState(false);
  const bookQuery = useQuery({
    queryFn: () => fetchBookById(id!),
    queryKey: ["book"],
  });
  const bookData = bookQuery.data!;
  const bookCommentsQuery = useComments("book", id!, bookData);
  return (
    <Wrapper>
      <PageWrapper title="" isTop={true}>
        {bookQuery.isSuccess && (
          <>
            <ElementWrapper className="flex gap-x-5">
              <img src={processImage(bookData.img)} alt="" className="w-1/3" />
              <div className="flex w-full flex-col justify-between">
                <div className="relative flex h-full flex-grow flex-col gap-x-10">
                  <h4 className="mb-1 text-2xl">{bookData.title}</h4>
                  <div className="mb-4">{bookData.user.name}</div>
                  <div className="mb-6 flex flex-wrap gap-x-2">
                    {bookData.genres.map((item) => (
                      <div
                        key={item.id}
                        className="max-w-full truncate rounded-md bg-slate-200 p-1 text-sm text-base"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-x-7">
                    <Rating
                      rating={Number(bookData.rating)}
                      statistic={bookData.ratings.map((item) => item.rating)}
                    />
                  </div>
                </div>

                <div className="flex gap-x-5 justify-self-end">
                  <Button
                    type="secondary"
                    className="w-1/2"
                    onClick={() => setAddedBook(!addedBook)}
                  >
                    {addedBook ? "Добавлена" : "Добавить"}
                  </Button>
                  <Button className="w-1/2">Читать онлайн</Button>
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
              <div>{bookData.description}</div>
            </ElementWrapper>
          </>
        )}
        {bookCommentsQuery.isSuccess && (
          <CommentSection
            id={id!}
            type="book"
            comments={bookCommentsQuery.data}
          />
        )}
      </PageWrapper>
    </Wrapper>
  );
};

export default BookPage;
