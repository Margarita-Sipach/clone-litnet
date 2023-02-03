import { BlogElement } from "../../ui/blog-element";
import { PageWrapper } from "../../ui/page-wrapper";
import { Wrapper } from "../../ui/wrapper";

export const BlogPage = () => {
  return (
    <Wrapper className="flex items-start">
      <PageWrapper title="Литературные блоги" isTop={true}>
        {new Array(10).fill("").map((item) => (
          <BlogElement
            blog={{
              img: "https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042660_10.jpg",
              author: "wwwwwww wwwwwwww",
              date: "20.22.2222",
              title: "kkkkkkkkkk",
              text: "kkkkkkkkk kkkkkk kkkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkkkkk kkkkkkkk kkkkkkk kkkkkkkkkkk kkkkkkkkkkk kkkkkkkkkkkk kkkkkkkkk kkkkkkkkkkkkkk kkkkkkkkkkk kkkkkkk k",
              commentCount: 25,
            }}
          />
        ))}
      </PageWrapper>
    </Wrapper>
  );
};
