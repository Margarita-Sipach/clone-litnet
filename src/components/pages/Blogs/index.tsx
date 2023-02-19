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
  if (blogsQuery.isSuccess) {
    console.log(blogsQuery.data);
  }
  return (
    <Wrapper className="flex items-start">
      <PageWrapper title="Литературные блоги" isTop={true}>
        {blogsQuery.isSuccess && (
          <>
            {blogsQuery.data.map((blog) => (
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
        )}
        {blogsQuery.isLoading && <p>loading blogs data...</p>}
      </PageWrapper>
    </Wrapper>
  );
};

export default Blogs;
