import React, { useEffect, useState } from "react";
import { CommentType } from "../../../../types/types";
import { CommentElement } from "./CommentElement";
import { Button } from "../../../ui/Button";
import { useUserContext } from "../../../context/userContext";
import useComments from "../api/useComments";
import usePostComment from "../api/usePostComment";
import { notifyError } from "../../../../hooks";
import { Spinner } from "../../../ui/Spinner";

type CommentSectionProps = {
  comments: CommentType[];
  type: "blog" | "book" | "contest";
  id: string | number;
};

export const CommentSection: React.FC<CommentSectionProps> = ({ id, type }) => {
  const { user } = useUserContext();
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");
  const { data: comments, isLoading } = useComments(type, id.toString());
  const commentMutation = usePostComment({
    id: id.toString(),
    userId: user?.id.toString(),
    commentType: type,
    text,
  });
  useEffect(() => {
    if (commentMutation?.status === "error") {
      notifyError(commentMutation.error.response!.data.message);
    } else if (commentMutation?.status === "success") {
      setText("");
    }
  }, [commentMutation?.status]);
  return (
    <div className="w-full border p-6">
      {comments ? (
        <>
          <p className="pb-4">{comments.length} комментариев</p>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
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
            disabled={!user}
          />
          {isActive && commentMutation && (
            <div className="mb-4 flex gap-4">
              {commentMutation.isLoading ? (
                <Spinner />
              ) : (
                <Button
                  onClick={() => {
                    commentMutation.mutate();
                  }}
                >
                  Добавить
                </Button>
              )}
              <Button
                onClick={() => {
                  setIsActive(false);
                  setText("");
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
      ) : isLoading ? (
        <Spinner className="flex w-full justify-center" />
      ) : (
        <p>error loading comments</p>
      )}
    </div>
  );
};
