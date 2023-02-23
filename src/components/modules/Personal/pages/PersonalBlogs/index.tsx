import { useParams } from "react-router-dom";
import useUserBlogs from "../../api/useUserBlogs";
import { PageWrapper } from "../../../../ui/PageWrapper";
import { PersonalBlogElement } from "../../components/PersonalBlogElement";

const PersonalBlogs = () => {
  const { id } = useParams();
  const { blogs } = useUserBlogs(id as string);
  return blogs ? (
    <PageWrapper title="Личный блог">
      <>
        {blogs.length ? (
          blogs.map(({ createdAt, title, text, id }, i) => {
            return (
              <PersonalBlogElement
                key={i}
                blog={{ date: createdAt, title, text, id }}
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

export default PersonalBlogs;
