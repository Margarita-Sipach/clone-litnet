import { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserBlogs } from "../../../../../hooks/account/useUserBlogs";
import { PageWrapper } from "../../../../ui/wrappers/PageWrapper";
import { PersonalBlogElement } from "../../../../modules/elements/PersonalBlogElement";
import { Spinner } from "../../../../ui/Spinner";
import { MotionWrapper } from "../../../../ui/wrappers/MotionWrapper";
import { sortByTime } from "../../../../../utils/utils";
import {
  PageConfig,
  getOffset,
  getPageCount,
} from "../../../../../utils/pageUtils";
import { PaginationPanel } from "../../../../ui/PaginationPanel";

export const PersonalBlogs = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const params = useMemo(
    () => ({
      limit: PageConfig.LIMIT,
      offset: getOffset(currentPage, PageConfig.LIMIT),
    }),
    [currentPage]
  );
  const { blogs, count, refetch, isLoading } = useUserBlogs(id as string);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    refetch();
  }, [params]);

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
              <PaginationPanel
                pageCount={getPageCount(Number(count), PageConfig.LIMIT)}
                onClick={handlePageClick}
                currentPage={currentPage}
              />
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
