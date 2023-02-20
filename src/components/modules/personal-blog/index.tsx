import { useParams } from "react-router-dom";
import { useFetchUserBlogs } from "../../../hooks";
import { PageWrapper } from "../../ui/page-wrapper";
import { PersonalBlogElement } from "../../ui/personal-blog-element";

export const PersonalBlog = () => {
  const { id } = useParams();
  const { blogs } = useFetchUserBlogs(id as string);
  return blogs ? (
    <PageWrapper title="Личный блог">
      <>
        {blogs.length ? (
          blogs.map(({ createdAt, title, text }, i) => {
            return (
              <PersonalBlogElement
                key={i}
                blog={{ date: createdAt, title, text }}
              ></PersonalBlogElement>
            );
          })
        ) : (
          <h1>Пользователь пока не завел личный блог</h1>
        )}
      </>
    </PageWrapper>
  ) : (
    <h1> loading</h1>
  );
};
