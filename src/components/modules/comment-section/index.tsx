import React, { useState } from "react";
import { CommentType, ErrorType } from "../../../types/types";
import { CommentElement } from "../../ui/comment-element";
import Button from "../../ui/button";
import {
  postBlogComment,
  postBookComment,
  postContestComment,
} from "../../../api/data";
import { useUserContext } from "../../context/userContext";
import { useMutation } from "@tanstack/react-query";
import { useComments } from "../../../hooks";

type CommentSectionProps = {
  comments: CommentType[];
  type: "blog" | "book" | "contest";
  id: string | number;
};

const CommentSection: React.FC<CommentSectionProps> = ({ id, type }) => {
  const { user } = useUserContext();
  const [isActive, setIsActive] = useState(false);
  const [isError, setIsError] = useState(false);
  const [text, setText] = useState("");
  let mutationFunction: (
    id: string | number,
    userId: string | number,
    text: string
  ) => Promise<any>;
  if (type === "blog") {
    mutationFunction = postBlogComment;
  } else if (type === "book") {
    mutationFunction = postBookComment;
  } else if (type === "contest") {
    mutationFunction = postContestComment;
  }
  const { data: comments, refetch } = useComments(type, id.toString());
  const commentMutation = useMutation({
    mutationFn: () => mutationFunction(id, user!.id, text),
    mutationKey: ["comment"],
    onSuccess: () => refetch(),
    onError: (error: ErrorType) => {
      if (error.response?.status === 400) {
        setIsError(true);
      }
    },
  });
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
            onClick={() => setIsActive(true)}
            placeholder="Напишите свой комментарий..."
          />
          {isError && <p>You already commented!</p>}
          {isActive && (
            <div className="mb-4 flex gap-4">
              <Button onClick={() => commentMutation.mutate()}>Добавить</Button>
              <Button onClick={() => setIsActive(false)}>Отменить</Button>
            </div>
          )}
          <div className="flex flex-col gap-6">
            {comments.map((comment) => (
              <CommentElement key={comment.id} {...comment} />
            ))}
          </div>
        </>
      ) : (
        <p>loading comments...</p>
      )}
    </div>
  );
};

export default CommentSection;
