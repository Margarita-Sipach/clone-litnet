import React from "react";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Table } from "../../../ui/Table";
import { Wrapper } from "../../../ui/wrappers/Wrapper";

const data = [
  {
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    name: "Author 1",
    email: "fufdivuhidfhviz@gmail.com",
    about:
      "111fffffffffffff fffffffffffff ffffffffffff fffff tttttttttt rrrrrrrrrrrrr deeeeeeee eeeeeee fffffffffffff ddddddddddddd eeeeeeeeeeee wwwwwwwww 111 wwwwwwwwww s ccccccccccc xxxxxxx ssssssssw wwwww errrrrrrrr yyyh bbbbb zzzzz",
    status: "Active",
    role: "author",
  },
  {
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    name: "Author Ivanovich",
    email: "fudfhviz@gmail.com",
    about: "111111 wwwwwwwwww s ssssssssw wwwww errrrrrrrr yyyh bbbbb zzzzz",
    status: "Inactive",
    role: "author",
  },
  {
    img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Maria Borovik",
    email: "f1@gmail.com",
    about: "111111 d2222222x ssssssssw wwwww errrrrrrrr yyyh bbbbb zzzzz",
    status: "Inactive",
    role: "user",
  },
];

export const AdminHomePage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between overflow-hidden">
      <Wrapper className="">
        <div className="flex flex-col gap-y-10">
          <PageWrapper
            isTop={true}
            title="Пользователи"
            className="w-full text-xl"
          >
            <Table
              header={["Пользователь", "Статус"]}
              data={data}
              type="user"
            />
          </PageWrapper>
        </div>
      </Wrapper>
    </div>
  );
};
