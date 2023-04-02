import React from "react";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Table } from "../../../ui/Table";
import { Wrapper } from "../../../ui/wrappers/Wrapper";

const data = [
  {
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    title: "Author 1",
    genres: ["1", "2"],
    about:
      "111fffffffffffff fffffffffffff ffffffffffff fffff tttttttttt rrrrrrrrrrrrr deeeeeeee eeeeeee fffffffffffff ddddddddddddd eeeeeeeeeeee wwwwwwwww 111 wwwwwwwwww s ccccccccccc xxxxxxx ssssssssw wwwww errrrrrrrr yyyh bbbbb zzzzz",
    date: "20.11.2023",
    prize: "dddddddd",
    simbols: 20000,
    status: "Active",
  },
  {
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    title: "Author Ivanovich",
    genres: ["1", "2"],
    about: "111111 wwwwwwwwww s ssssssssw wwwww errrrrrrrr yyyh bbbbb zzzzz",
    date: "20.11.2023",
    prize: "dddddddd",
    simbols: 20000,
    status: "Inactive",
  },
  {
    img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Maria Borovik",
    genres: ["1", "2"],
    about: "111111 d2222222x ssssssssw wwwww errrrrrrrr yyyh bbbbb zzzzz",
    date: "20.11.2023",
    prize: "dddddddd",
    simbols: 20000,
    status: "Inactive",
  },
];

export const AdminContestsPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between overflow-hidden">
      <Wrapper className="">
        <PageWrapper isTop={true} title="Конкурсы" className="w-full text-xl">
          <Table header={["Конкурс", "Статус"]} data={data} type="contest" />
        </PageWrapper>
      </Wrapper>
    </div>
  );
};
