import { Avatar } from "../../../ui/avatars/Avatar";
import { ElementWrapper } from "../../../ui/wrappers/ElementWrapper";
import React from "react";
import { Link } from "react-router-dom";
import { processImage } from "../../../../utils/utils";
import { useFetchUser } from "../../../../hooks/user/useFetchUser";

type BlogElementProps = {
  id: string;
  userId: string;
  title: string;
  text: string;
  createdAt: string;
};

export const BlogElement: React.FC<BlogElementProps> = ({
  id,
  userId,
  title,
  text,
  createdAt,
}) => {
  const { account, isSuccess, isLoading } = useFetchUser(userId);
  return (
    <Link to={`${id}`}>
      <ElementWrapper className="relative flex h-40 flex-col gap-y-5 sm:h-44">
        {isSuccess && account && (
          <>
            <div className="text-xl">{title}</div>
            <Avatar
              image={processImage(account.img)}
              name={account.name}
              date={createdAt}
            ></Avatar>
            <div className="overflow-hidden overflow-ellipsis text-sm">
              {text}
            </div>
          </>
        )}
        {isLoading && <p>loading user data...</p>}
      </ElementWrapper>
    </Link>
  );
};
