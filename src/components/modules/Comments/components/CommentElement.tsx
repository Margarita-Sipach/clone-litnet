import React from "react";
import { Avatar } from "../../../ui/Avatar";
import { ElementWrapper } from "../../../ui/ElementWrapper";
import { CommentType } from "../../../../types/types";
import { createDate, processImage } from "../../../../utils/utils";

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
        date={createDate(createdAt)}
      />
      <p className="text-sm">{text}</p>
    </ElementWrapper>
  );
};
