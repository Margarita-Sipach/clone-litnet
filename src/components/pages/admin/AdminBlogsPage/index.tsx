import React, { useEffect } from "react";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Table } from "../../../ui/Table";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { useBlogs } from "../../../../hooks/blogs/useBlogs";
import { Spinner } from "../../../ui/Spinner";

export const AdminBlogsPage = () => {
  const { blogs, isLoading } = useBlogs();

  return (
    <div className="flex w-full flex-col items-center justify-between overflow-hidden">
      <Wrapper className="">
        <PageWrapper isTop={true} title="Блоги" className="w-full text-xl">
          {blogs ? (
            <Table header={["Блог", "Статус"]} data={blogs} type="blog" />
          ) : isLoading ? (
            <Spinner className="flex w-full items-center justify-center" />
          ) : (
            <p>Непредвиденные проблемы</p>
          )}
        </PageWrapper>
      </Wrapper>
    </div>
  );
};
