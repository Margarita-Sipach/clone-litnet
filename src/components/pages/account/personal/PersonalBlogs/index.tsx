import { useParams } from "react-router-dom";
import useUserBlogs from "../../../../../api/account/useUserBlogs";
import { PageWrapper } from "../../../../ui/wrappers/PageWrapper";
import { PersonalBlogElement } from "../../../../modules/elements/PersonalBlogElement";
import { Spinner } from "../../../../ui/Spinner";
import { MotionWrapper } from "../../../../ui/wrappers/MotionWrapper";
import { sortByTime } from "../../../../../utils/utils";

export const PersonalBlogs = () => {
  const { id } = useParams();
  const { blogs, isLoading } = useUserBlogs(id as string);
  return (
    <PageWrapper title="Личный блог">
      {blogs ? (
        <MotionWrapper>
          {blogs.length ? (
            <div className="flex flex-col gap-4">
              {sortByTime(blogs).map(({ createdAt, title, text, id }, i) => {
                return (
                  <PersonalBlogElement
                    key={i}
                    blog={{ date: createdAt, title, text, id }}
                  />
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
