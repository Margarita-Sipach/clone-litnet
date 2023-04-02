import React from "react";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Table } from "../../../ui/Table";
import { Wrapper } from "../../../ui/wrappers/Wrapper";

const data = [
  {
    title: "Author 1",
    content:
      "111fffffffffffff fffffffffffff ffffffffffff fffff tttttttttt rrrrrrrrrrrrr deeee 1fffffffffffff ffffffffffff fffff tttttttttt rrrrrrrrrrrrr deeee 1fffffffffffff ffffffffffff fffff tttttttttt rrrrrrrrrrrrr deeee 1 fffffffffffff ffffffffffff fffff tttttttttt rrrrrrrrrrrrr deeee 111fffffffffffff fffffffffffff ffffffffffff fffff tttttttttt rrrrrrrrrrrrr deeee 111fffffffffffff fffffffffffff ffffffffffff fffff tttttttttt rrrrrrrrrrrrr deeeeeeee eeeeeee fffffffffffff ddddddddddddd eeeeeeeeeeee wwwwwwwww 111 wwwwwwwwww s ccccccccccc xxxxxxx ssssssssw wwwww errrrrrrrr yyyh bbbbb zzzzz",
    status: "Active",
  },
  {
    title: "Author Ivanovich",
    content: "111111 wwwwwwwwww s ssssssssw wwwww errrrrrrrr yyyh bbbbb zzzzz",
    status: "Active",
  },
  {
    title: "htcompress&cs=tinysrgbr=1&w=500",
    content: "111111 d2222222x ssssssssw wwwww errrrrrrrr yyyh bbbbb zzzzz",
    status: "Inactive",
  },
];

export const AdminBlogsPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between overflow-hidden">
      <Wrapper className="">
        <PageWrapper isTop={true} title="Блоги" className="w-full text-xl">
          <Table header={["Блог", "Статус"]} data={data} type="blog" />
        </PageWrapper>
      </Wrapper>
    </div>
  );
};
