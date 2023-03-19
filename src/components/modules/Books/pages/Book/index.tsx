import React, { useMemo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CommentSection } from "../../../Comments/components/CommentSection";
import { ElementWrapper } from "../../../../ui/ElementWrapper";
import { PageWrapper } from "../../../../ui/PageWrapper";
import { PrimarySelect } from "../../../../ui/PrimarySelect";
import { Rating } from "../../../../ui/Rating";
import { Button } from "../../../../ui/Button";
import { Wrapper } from "../../../../ui/Wrapper";
import {
  baseUrl,
  handleImageError,
  processImage,
} from "../../../../../utils/utils";
import useComments from "../../../Comments/api/useComments";
import useBook from "../../api/useBook";
import { PrimaryLink } from "../../../../ui/PrimaryLink";
import { Router } from "../../../../router";
import { useUserContext } from "../../../../context/userContext";
import { usePostBookmark } from "../../../Reader/api/usePostBookmark";
import useChapters from "../../../Account/api/useChapters";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { ErrorResponse } from "../../../../../types/types";
import { notifyError, notifySuccess } from "../../../../../hooks";

const rateBook = async (
  userId: string | number,
  bookId: string,
  rating: number
) => {
  try {
    const response = await axios.post(`${baseUrl}/ratings/`, {
      userId,
      bookId,
      rating,
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export type Params = {
  id: string;
};

export const BookPage = () => {
  const { user } = useUserContext();
  const { id } = useParams<Params>();
  const userBookmark = useMemo(
    () =>
      user?.bookmarks
        ? user?.bookmarks.find((b) => b.bookId === Number(id))
        : undefined,
    [id, user?.bookmarks]
  );
  const addedBook = useMemo(() => !!userBookmark, [userBookmark]);
  const { mutate: addBookmark } = usePostBookmark();
  const { chapters } = useChapters(id!);
  const { data: book, isLoading: bookLoading, refetch } = useBook(id!);
  const [rating, setRating] = useState<number | string>("");
  const { data: comments, isLoading: commentsLoading } = useComments(
    "book",
    id!,
    book
  );

  const pageId = useMemo(() => {
    if (!book || !chapters || !book.chapters[0]) return 1;
    const chapter = chapters?.find((ch) => ch.id === book.chapters[0].id);
    return chapter && chapter.pages ? chapter.pages[0].id : 1;
  }, [chapters, book]);

  const handleAddBookmark = () => {
    addBookmark({
      userId: user!.id,
      bookId: Number(id),
      chapterId: book!.chapters[0].id,
      pageId: pageId,
    });
  };

  const ratingMutation = useMutation({
    mutationFn: () => rateBook(user!.id, id!, Number(rating)),
    mutationKey: ["rateBook"],
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
  });
  useEffect(() => {
    if (ratingMutation.status === "success") {
      notifySuccess("success");
      refetch();
    } else if (ratingMutation.status === "error") {
      notifyError(ratingMutation.error.response!.data.message);
    }
  }, [ratingMutation.status]);

  return (
    <Wrapper>
      <PageWrapper title="" isTop={true}>
        {book ? (
          <>
            <ElementWrapper className="flex flex-col gap-x-5 sm:flex-row">
              <img
                src={processImage(book.img)}
                alt=""
                className="h-80 w-full object-cover sm:w-1/3"
                onError={handleImageError}
              />
              <div className="flex w-full flex-col justify-between">
                <div className="relative flex h-full flex-grow flex-col gap-x-10">
                  <h4 className="mb-1 text-2xl">{book.title}</h4>
                  <Link
                    to={`/users/${book.userId}`}
                    className="mb-4 text-indigo-500"
                  >
                    {book.user.name}
                  </Link>
                  <div className="mb-6 flex flex-wrap gap-x-2">
                    {book.genres.map((item) => (
                      <div
                        key={item.id}
                        className="max-w-full truncate rounded-md bg-slate-200 p-1 text-sm text-base"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                  <Rating
                    rating={Number(book.rating)}
                    statistic={book.ratings.map((item) => item.rating)}
                  />
                  {user && (
                    <div className="mt-2 mb-4 flex items-center gap-2">
                      <input
                        value={rating!}
                        onChange={(e) => setRating(Number(e.target.value))}
                        type="number"
                        placeholder="Оценка"
                        className="w-40 self-start border p-1"
                      />
                      <Button size="sm" onClick={() => ratingMutation.mutate()}>
                        Оценить
                      </Button>
                    </div>
                  )}
                </div>
                {chapters && chapters?.length > 0 ? (
                  <div className="flex gap-x-5 justify-self-end">
                    <Button
                      type="secondary"
                      className={`w-1/2 ${
                        addedBook &&
                        " border-indigo-500 text-indigo-500 hover:cursor-default"
                      }`}
                      onClick={() => {
                        if (addedBook) return;
                        handleAddBookmark();
                      }}
                    >
                      {addedBook ? "Добавлена" : "Добавить"}
                    </Button>
                    <PrimaryLink
                      path={`${Router.reader}/${id}`}
                      className="w-1/2 text-center"
                    >
                      Читать онлайн
                    </PrimaryLink>
                  </div>
                ) : (
                  <div className="w-full text-center">
                    В книге недостаточно глав для чтения
                  </div>
                )}
                <div className="my-5 h-[1px] w-full bg-slate-300"></div>
                <PrimarySelect
                  title="Содержание"
                  options={
                    chapters
                      ? (chapters?.map((ch) => ch.title) as string[])
                      : []
                  }
                ></PrimarySelect>
              </div>
            </ElementWrapper>
            <ElementWrapper className="mb-5">
              <h3 className="mb-2 text-xl">Аннотация</h3>
              <div>{book.description}</div>
            </ElementWrapper>
          </>
        ) : bookLoading ? (
          <p>loading book data...</p>
        ) : (
          <p>error loading book data</p>
        )}
        {comments ? (
          <CommentSection id={id!} type="book" comments={comments} />
        ) : commentsLoading ? (
          <p>loading comments...</p>
        ) : (
          <p>error loading comments</p>
        )}
      </PageWrapper>
    </Wrapper>
  );
};
