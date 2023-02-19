import React from "react";
import { Avatar } from "../avatar";
import { ElementWrapper } from "../element-wrapper";
import { CommentType } from "../../../types/types";
import { processImage } from "../../../utils/utils";

export const CommentElement: React.FC<CommentType> = ({
  user,
  text,
  createdAt,
}) => {
  return (
    <ElementWrapper className="flex w-full flex-col justify-center gap-y-4">
      <Avatar
        image={processImage(user!.image)}
        name={user!.name}
        date={createdAt}
      />
      <p className="text-sm">{text}</p>
    </ElementWrapper>
  );
};
