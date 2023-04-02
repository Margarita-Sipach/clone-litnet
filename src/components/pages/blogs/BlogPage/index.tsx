import React from "react";
import { Link, useParams } from "react-router-dom";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { CommentSection } from "../../../modules/CommentsSection";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogById, fetchUserData } from "../../../../api/data";
import useComments from "../../../../api/comments/useComments";
import { createDate } from "../../../../utils/utils";

type Params = {
  id: string;
};

export const BlogPage = () => {
  const { id } = useParams<Params>();
  const { data: blog, isLoading: blogLoading } = useQuery({
    queryFn: () => fetchBlogById(id!),
    queryKey: ["blog"],
  });
  const userQuery = useQuery({
    queryFn: () => fetchUserData(blog!.userId),
    queryKey: ["user"],
    enabled: !!blog,
  });
  const { data: comments, isLoading: commentsLoading } = useComments(
    "blog",
    id!,
    blog
  );
  return (
    <Wrapper>
      <PageWrapper isTop={true}>
        {blog && userQuery.isSuccess ? (
          <>
            <h3 className="self-start text-2xl font-medium">{blog.title}</h3>
            <p className="w-full bg-gray-50 py-2 px-4 text-xs">
              Автор:{" "}
              <Link
                to={`/users/${userQuery.data.id}`}
                className="text-blue-500"
              >
                {userQuery.data.name}
              </Link>{" "}
              / Добавлено: {createDate(blog.createdAt)}
            </p>
            <p>{blog.text}</p>
            {comments ? (
              <CommentSection type="blog" id={id!} comments={comments} />
            ) : commentsLoading ? (
              <p>loading comments...</p>
            ) : (
              <p>error loading comments</p>
            )}
          </>
        ) : blogLoading ? (
          <p>loading blog data...</p>
        ) : (
          <p>error loading blog data</p>
        )}
      </PageWrapper>
    </Wrapper>
  );
};
