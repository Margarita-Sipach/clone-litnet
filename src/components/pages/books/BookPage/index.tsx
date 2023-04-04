import React, { useMemo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ElementWrapper } from "../../../ui/wrappers/ElementWrapper";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { PrimarySelect } from "../../../ui/PrimarySelect";
import { Button } from "../../../ui/buttons/Button";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { handleImageError, processImage } from "../../../../utils/utils";
import useBook from "../../../../hooks/books/useBook";
import { PrimaryLink } from "../../../ui/PrimaryLink";
import { Router } from "../../../router";
import { useUserContext } from "../../../context/userContext";
import { usePostBookmark } from "../../../../hooks/reader/usePostBookmark";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { ErrorResponse } from "../../../../types/types";
import { notifyError, notifySuccess } from "../../../../hooks";
import useComments from "../../../../hooks/comments/useComments";
import { CommentSection } from "../../../modules/CommentsSection";
import useChapters from "../../../../hooks/account/useChapters";
import { CommentTypes } from "../../../../hooks/comments/usePostComment";
import { RatingForm } from "../../../modules/rating/RatingForm/indext";
import { useUserRating } from "../../../../hooks/books/useUserRating";
import { BsStar, BsStarFill } from "react-icons/bs";
import { SelectList } from "../../../ui/SelectList";

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
  const {
    data: rating,
    isSuccess: ratingSuccess,
    refetch: ratingRefetch,
  } = useUserRating(`${user?.id}`, `${id}`);
  const { data: comments, isLoading: commentsLoading } = useComments(
    CommentTypes.BOOK,
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

  useEffect(() => {
    ratingRefetch();
  }, [book, ratingRefetch, user]);

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
                  <span className="flex items-center">
                    <h4 className="mb-1 text-2xl">{book.title}</h4>
                    {ratingSuccess && rating ? (
                      <BsStarFill
                        className="cursor-pointer pl-3 text-3xl text-indigo-400"
                        title={`Вы оценили книгу: ${rating.rating}`}
                      />
                    ) : (
                      <BsStar
                        className="cursor-pointer pl-3 text-3xl text-indigo-400"
                        title="Вы ещё не оценили книгу"
                      />
                    )}
                  </span>
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
                        className="max-w-full truncate rounded-md bg-slate-200 p-1 text-base text-sm"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                  <RatingForm book={book} refetchBook={refetch} />
                </div>
                {chapters && chapters?.length > 0 ? (
                  user ? (
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
                      {" "}
                      Пожалуйста,{" "}
                      <Link
                        to={`${Router.login}`}
                        className="w-1/2 text-center text-blue-800 hover:underline"
                      >
                        авторизируйтесь
                      </Link>{" "}
                      для чтения книги
                    </div>
                  )
                ) : (
                  <div className="w-full text-center">
                    В книге недостаточно глав для чтения
                  </div>
                )}
                <div className="my-5 h-[1px] w-full bg-slate-300"></div>
                <SelectList
                  title="Содержание"
                  options={
                    chapters
                      ? (chapters?.map((ch) => ch.title) as string[])
                      : []
                  }
                />
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
          <CommentSection
            id={id!}
            type={CommentTypes.BOOK}
            comments={comments}
          />
        ) : commentsLoading ? (
          <p>loading comments...</p>
        ) : (
          <p>error loading comments</p>
        )}
      </PageWrapper>
    </Wrapper>
  );
};
