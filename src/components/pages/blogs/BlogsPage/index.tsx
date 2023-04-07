import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { BlogElement } from "../../../modules/elements/BlogElement";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { createDate } from "../../../../utils/utils";
import { Spinner } from "../../../ui/Spinner";
import { useBlogs } from "../../../../hooks/blogs/useBlogs";

export const Blogs = () => {
  const { blogs, isLoading } = useBlogs();
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
