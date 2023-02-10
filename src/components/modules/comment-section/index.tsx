import React, { useState } from "react";
import { CommentProps } from "../../../types/types";
import { CommentElement } from "../../ui/comment-element";
import Button from "../../ui/button";



type CommentSectionProps = {
  comments: CommentProps[];
};

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="w-full border p-6">
      <p className="pb-4">{comments.length} комментариев</p>
      <textarea
        className={`mb-4 flex w-full items-start rounded border bg-gray-50 px-2 py-1 transition-all focus:outline-none ${
          isActive ? "h-44" : ""
        }`}
        onClick={() => setIsActive(true)}
        placeholder="Напишите свой комментарий..."
      />
      {isActive && (
        <div className="mb-4 flex gap-4">
          <Button>Добавить</Button>
          <Button onClick={() => setIsActive(false)}>Отменить</Button>
        </div>
      )}
      <div className="flex flex-col gap-6">
        {comments.map((comment) => (
          <CommentElement
            image={comment.image}
            name={comment.name}
            date={comment.date}
            content={comment.content}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
