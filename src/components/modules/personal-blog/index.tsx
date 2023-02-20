import { useParams } from "react-router-dom";
import { PageWrapper } from "../../ui/page-wrapper";
import { PersonalBlogElement } from "../../ui/personal-blog-element";
import { useQuery } from "@tanstack/react-query";
import { fetchUserBlogs } from "../../../api/data";

export const PersonalBlog = () => {
  const { id } = useParams();
  const userBlogsQuery = useQuery({
    queryFn: async () => fetchUserBlogs(id!),
    queryKey: [id, "userBlogs"],
  });
  const blogsData = userBlogsQuery.data!;
  return userBlogsQuery.isSuccess ? (
    <PageWrapper title="Личный блог">
      <>
        {blogsData.map(({ createdAt, title, text, id }) => {
          return (
            <PersonalBlogElement
              key={id}
              blog={{ id, date: createdAt, title, text }}
            ></PersonalBlogElement>
          );
        })}
      </>
    </PageWrapper>
  ) : (
    <h1> loading</h1>
  );
};
