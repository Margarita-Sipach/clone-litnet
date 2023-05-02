import { useMemo, useState, useEffect } from "react";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { BlogElement } from "../../../modules/elements/BlogElement";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { createDate } from "../../../../utils/utils";
import { Spinner } from "../../../ui/Spinner";
import { useBlogs } from "../../../../hooks/blogs/useBlogs";
import { PaginationPanel } from "../../../ui/PaginationPanel";
import {
  PageConfig,
  getOffset,
  getPageCount,
} from "../../../../utils/pageUtils";

export const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const params = useMemo(
    () => ({
      limit: PageConfig.LIMIT,
      offset: getOffset(currentPage, PageConfig.LIMIT),
    }),
    [currentPage]
  );
  const { blogs, count, refetch, isLoading } = useBlogs(params);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    refetch();
  }, [params]);

  return (
    <Wrapper className="flex items-start">
      {blogs ? (
        <PageWrapper title="Литературные блоги" isTop={true}>
          {blogs.length ? (
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
              <PaginationPanel
                pageCount={getPageCount(Number(count), PageConfig.LIMIT)}
                onClick={handlePageClick}
                currentPage={currentPage}
              />
            </>
          ) : (
            <h1>Блоги пока не написаны</h1>
          )}
        </PageWrapper>
      ) : isLoading ? (
        <Spinner className="flex w-full justify-center" />
      ) : (
        <p>error loading blogs</p>
      )}
    </Wrapper>
  );
};
