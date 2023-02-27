import { useParams } from "react-router-dom";
import useUserBlogs from "../../api/useUserBlogs";
import { PageWrapper } from "../../../../ui/PageWrapper";
import { PersonalBlogElement } from "../../components/PersonalBlogElement";
import Spinner from "../../../../ui/Spinner";
import MotionWrapper from "../../../../ui/MotionWrapper";

const PersonalBlogs = () => {
  const { id } = useParams();
  const { blogs, isLoading } = useUserBlogs(id as string);
  return (
    <PageWrapper title="Личный блог">
      {blogs ? (
        <MotionWrapper>
          {blogs.length ? (
            <div className="flex flex-col gap-4">
              {blogs.map(({ createdAt, title, text, id }, i) => {
                return (
                  <PersonalBlogElement
                    key={i}
                    blog={{ date: createdAt, title, text, id }}
                  ></PersonalBlogElement>
                );
              })}
            </div>
          ) : (
            <h1>Пользователь пока не завел личный блог</h1>
          )}
        </MotionWrapper>
      ) : isLoading ? (
        <Spinner className="flex w-full justify-center" />
      ) : (
        <p>Error loading blogs</p>
      )}
    </PageWrapper>
  );
};

export default PersonalBlogs;
