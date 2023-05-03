import React from "react";
import { Link, useParams } from "react-router-dom";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { CommentSection } from "../../../modules/CommentsSection";
import { useComments } from "../../../../hooks/comments/useComments";
import { createDate } from "../../../../utils/utils";
import { CommentTypes } from "../../../../hooks/comments/usePostComment";
import { useBlog } from "../../../../hooks/blogs/useBlog";
import { useFetchUser } from "../../../../hooks/user/useFetchUser";

type Params = {
  id: string;
};

export const BlogPage = () => {
  const { id } = useParams<Params>();
  const { blog, isLoading: isBlogLoading } = useBlog(id!);
  const { account, isSuccess: isUserSuccess } = useFetchUser(blog?.userId);
  const { comments, isLoading: commentsLoading } = useComments(
    CommentTypes.BLOG,
    id!,
    blog
  );
  return (
    <Wrapper>
      <PageWrapper isTop={true}>
        {blog && isUserSuccess && account ? (
          <>
            <h3 className="self-start text-2xl font-medium">{blog.title}</h3>
            <p className="w-full bg-gray-50 px-4 py-2 text-xs">
              Автор:{" "}
              <Link to={`/users/${account.id}`} className="text-blue-500">
                {account.name}
              </Link>{" "}
              / Добавлено: {createDate(blog.createdAt)}
            </p>
            <p>{blog.text}</p>
            {comments ? (
              <CommentSection
                type={CommentTypes.BLOG}
                id={id!}
                comments={comments}
              />
            ) : commentsLoading ? (
              <p>loading comments...</p>
            ) : (
              <p>error loading comments</p>
            )}
          </>
        ) : isBlogLoading ? (
          <p>loading blog data...</p>
        ) : (
          <p>error loading blog data</p>
        )}
      </PageWrapper>
    </Wrapper>
  );
};
