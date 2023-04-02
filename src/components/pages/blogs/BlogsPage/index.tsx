import React from "react";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { BlogElement } from "../../../modules/elements/BlogElement";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../../../../api/data";
import { createDate } from "../../../../utils/utils";
import { Spinner } from "../../../ui/Spinner";

export const Blogs = () => {
  const blogsQuery = useQuery({
    queryFn: fetchBlogs,
    queryKey: ["blogs"],
  });
  const { data: blogs, isLoading } = blogsQuery;
  return (
    <Wrapper className="flex items-start">
      <PageWrapper title="Литературные блоги" isTop={true}>
        {blogs ? (
          <>
            {blogs.map((blog) => (
              <BlogElement
                key={blog.id}
                id={blog.id}
                userId={blog.userId}
                title={blog.title}
                text={blog.text}
                createdAt={createDate(blog.createdAt)}
              />
            ))}
          </>
        ) : isLoading ? (
          <Spinner className="flex w-full justify-center" />
        ) : (
          <p>error loading blogs</p>
        )}
      </PageWrapper>
    </Wrapper>
  );
};
