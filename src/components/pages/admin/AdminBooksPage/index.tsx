import React, { useEffect } from "react";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Table } from "../../../ui/Table";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { useBooks } from "../../../../hooks/books/useBooks";
import { Spinner } from "../../../ui/Spinner";

export const AdminBooksPage = () => {
  const { books, isLoading } = useBooks();
  return (
    <div className="flex w-full flex-col items-center justify-between overflow-hidden">
      <Wrapper className="">
        <PageWrapper isTop={true} title="Книги" className="w-full text-xl">
          {books ? (
            <Table header={["Книга", "Статус"]} data={books} type="book" />
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
