import React, { useEffect, useState } from "react";
import { CommentType } from "../../../types/types";
import { CommentElement } from "../elements/CommentElement";
import { Button } from "../../ui/buttons/Button";
import { useUserContext } from "../../context/userContext";
import { useComments } from "../../../hooks/comments/useComments";
import {
  CommentTypes,
  usePostComment,
} from "../../../hooks/comments/usePostComment";
import { Spinner } from "../../ui/Spinner";
import { useForm } from "react-hook-form";
import {
  ErrorInputMessages,
  ErrorNotifies,
  InputNames,
  SuccessNotifies,
} from "../../../utils/formUtils";
import { ErrorMessage } from "@hookform/error-message";
import { notifyError, notifySuccess } from "../../../utils/utils";

type CommentSectionProps = {
  comments: CommentType[];
  type: CommentTypes.BLOG | CommentTypes.BOOK | CommentTypes.CONTEST;
  id: string | number;
};

export const CommentSection: React.FC<CommentSectionProps> = ({ id, type }) => {
  const { user } = useUserContext();
  const [isActive, setIsActive] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm({ mode: "onBlur" });
  const { comments, isLoading: isLoadingComments } = useComments(
    type,
    id.toString()
  );
  const { createComment, isLoading, isError, isSuccess, error, hookStatus } =
    usePostComment({
      id: id.toString(),
      commentType: type,
    });

  const handleSubmitForm = (data) => {
    createComment(data);
    resetField(InputNames.TEXT);
    setIsActive(false);
  };

  useEffect(() => {
    if (isError && error) {
      notifyError(ErrorNotifies.COMMENT_ERROR);
    } else if (isSuccess) {
      notifySuccess(SuccessNotifies.COMMENT_CREATED);
    }
  }, [error, isError, isSuccess]);

  return (
    <form className="w-full border p-6">
      {comments ? (
        <>
          <p className="pb-4">{comments.length} комментариев</p>

          <label>
            <textarea
              className={`mb-4 flex w-full items-start rounded border bg-gray-50 px-2 py-1 transition-all focus:outline-none ${
                isActive ? "h-44" : ""
              }`}
              onClick={() => {
                if (user) setIsActive(true);
              }}
              placeholder={
                user
                  ? "Напишите свой комментарий"
                  : "Авторизуйтесь чтобы оставлять комментарии"
              }
              {...register(InputNames.TEXT, {
                maxLength: {
                  value: 400,
                  message: ErrorInputMessages.TEXT_LENGTH,
                },
                disabled: !user,
              })}
            />
            <div className="ml-2 text-sm font-semibold text-red-500">
              <ErrorMessage errors={errors} name={`${InputNames.TEXT}`} />
            </div>
          </label>
          {isActive && hookStatus && (
            <div className="mb-4 flex gap-4">
              {isLoading ? (
                <Spinner />
              ) : (
                <Button onClick={handleSubmit(handleSubmitForm)}>
                  Добавить
                </Button>
              )}
              <Button
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Отменить
              </Button>
            </div>
          )}
          <div className="flex flex-col gap-6">
            {comments.map((comment) => (
              <CommentElement key={comment.id} {...comment} />
            ))}
          </div>
        </>
      ) : isLoadingComments ? (
        <Spinner className="flex w-full justify-center" />
      ) : (
        <p>Error loading comments</p>
      )}
    </form>
  );
};
