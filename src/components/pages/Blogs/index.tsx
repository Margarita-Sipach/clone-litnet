import React from "react";
import { PageWrapper } from "../../ui/page-wrapper";
import { BlogElement } from "../../ui/blog-element";
import { Wrapper } from "../../ui/wrapper";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../../../api/data";
import { createDate } from "../../../utils/utils";

const Blogs = () => {
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
          <p>loading blogs...</p>
        ) : (
          <p>error loading blogs</p>
        )}
      </PageWrapper>
    </Wrapper>
  );
};

export default Blogs;
