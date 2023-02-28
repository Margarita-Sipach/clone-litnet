import { Avatar } from "../../../ui/Avatar";
import { ElementWrapper } from "../../../ui/ElementWrapper";
import React from "react";
import { fetchUserData } from "../../../../api/data";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { processImage } from "../../../../utils/utils";

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
  const userQuery = useQuery({
    queryFn: () => fetchUserData(userId),
    queryKey: ["user", userId],
  });
  const userData = userQuery.data!;
  return (
    <Link to={`${id}`}>
      <ElementWrapper className="relative flex h-40 flex-col gap-y-5 sm:h-44">
        {userQuery.isSuccess && (
          <>
            <div className="text-xl">{title}</div>
            <Avatar
              image={processImage(userData.img)}
              name={userData.name}
              date={createdAt}
            ></Avatar>
            <div className="overflow-hidden overflow-ellipsis text-sm">
              {text}
            </div>
          </>
        )}
        {userQuery.isLoading && <p>loading user data...</p>}
      </ElementWrapper>
    </Link>
  );
};
