import { useParams } from "react-router-dom";
import useUserBlogs from "../../api/useUserBlogs";
import { PageWrapper } from "../../../../ui/PageWrapper";
import { PersonalBlogElement } from "../../components/PersonalBlogElement";
import Spinner from "../../../../ui/Spinner";
import MotionWrapper from "../../../../ui/MotionWrapper";
import { BlogType } from "../../../../../types/types";

const sortByTime = (blogs: BlogType[]) =>
  [...blogs].sort((a, b) => {
    const aSeconds = new Date(a.createdAt);
    const bSeconds = new Date(b.createdAt);

    if (aSeconds > bSeconds) return -1;
    else return 1;
  });
const PersonalBlogs = () => {
  const { id } = useParams();
  const { blogs, isLoading } = useUserBlogs(id as string);
  return (
    <PageWrapper title="Личный блог">
      {blogs ? (
        <MotionWrapper>
          {blogs.length ? (
            sortByTime(blogs).map(({ createdAt, title, text, id }, i) => {
              return (
                <PersonalBlogElement
                  key={i}
                  blog={{ date: createdAt, title, text, id }}
               />
              );
            })
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
