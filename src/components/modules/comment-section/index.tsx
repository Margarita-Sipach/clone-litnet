import React, { useState } from "react";
import { CommentElement } from "../../ui/comment-element";
import { PrimaryButton } from "../../ui/primary-button";
import { SecondaryButton } from "../../ui/secodary-button";

type Comment = {
  image: string;
  name: string;
  date: string;
  content: string;
};

type CommentSectionProps = {
  comments: Comment[];
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
          <PrimaryButton className="text-sm lg:text-sm">Добавить</PrimaryButton>
          <SecondaryButton
            onClickButton={() => setIsActive(false)}
            className="text-sm lg:text-sm"
          >
            Отменить
          </SecondaryButton>
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
