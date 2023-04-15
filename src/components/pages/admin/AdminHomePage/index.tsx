import React from "react";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Table } from "../../../ui/Table";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { useUsers } from "../../../../hooks/user/useUsers";
import { Spinner } from "../../../ui/Spinner";

export const AdminHomePage = () => {
  const { users, isLoading } = useUsers();

  return (
    <div className="flex w-full flex-col items-center justify-between overflow-hidden">
      <Wrapper className="">
        <div className="flex flex-col gap-y-10">
          <PageWrapper
            isTop={true}
            title="Пользователи"
            className="w-full text-xl"
          >
            {users ? (
              <Table
                header={["Пользователь", "Статус"]}
                data={users}
                type="user"
              />
            ) : isLoading ? (
              <Spinner className="flex w-full items-center justify-center" />
            ) : (
              <p>Непредвиденные проблемы</p>
            )}
          </PageWrapper>
        </div>
      </Wrapper>
    </div>
  );
};
