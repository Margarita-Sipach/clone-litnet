import React from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import CommentSection from "../../modules/comment-section";
import { useQuery } from "@tanstack/react-query";
import {
  fetchBlogById,
  fetchBlogComments,
  fetchUserData,
} from "../../../api/data";

type Params = {
  id: string;
};

const BlogPage = () => {
  const { id } = useParams<Params>();
  const blogQuery = useQuery({
    queryFn: () => fetchBlogById(id!),
    queryKey: ["blog"],
  });
  const blogData = blogQuery.data!;
  const userQuery = useQuery({
    queryFn: () => fetchUserData(blogData.userId),
    queryKey: ["user"],
    enabled: !!blogQuery.data,
  });
  if (blogQuery.isSuccess) {
    console.log(blogQuery.data);
  }
  const blogCommentsQuery = useQuery({
    queryFn: () => fetchBlogComments(id!),
    queryKey: ["blogComments"],
  });
  return (
    <Wrapper>
      <PageWrapper isTop={true}>
        {blogQuery.isSuccess && userQuery.isSuccess ? (
          <>
            <h3 className="self-start text-2xl font-medium">
              {blogData.title}
            </h3>
            <p className="w-full bg-gray-50 py-2 px-4 text-xs">
              Автор:{" "}
              <span className="text-blue-500">{userQuery.data.name}</span> /
              Добавлено: {blogData.createdAt}
            </p>
            <p>{blogData.text}</p>
            {blogCommentsQuery.isSuccess && (
              <CommentSection comments={blogCommentsQuery.data} />
            )}
          </>
        ) : (
          <p>loading blog data...</p>
        )}
      </PageWrapper>
    </Wrapper>
  );
};

export default BlogPage;
