import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../ui/wrapper";
import { PageWrapper } from "../../ui/page-wrapper";
import { CommentElement } from "../../ui/comment-element";
import { PrimaryButton } from "../../ui/primary-button";
import { SecondaryButton } from "../../ui/secodary-button";

type Params = {
  id: string;
};

const mockBlog = {
  title: "Test Blog",
  author: "John Doe",
  datePosted: "05.02.2023",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  comments: [
    {
      name: "Author 1",
      content: "lorem lorem lorem lorem lorem",
      date: "01.01.1970",
      image:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg",
    },
    {
      name: "Author 2",
      content: "lorem lorem lorem lorem lorem",
      date: "01.01.1970",
      image:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg",
    },
    {
      name: "Author 3",
      content: "lorem lorem lorem lorem lorem",
      date: "01.01.1970",
      image:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg",
    },
    {
      name: "Author 1",
      content: "lorem lorem lorem lorem lorem",
      date: "01.01.1970",
      image:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg",
    },
    {
      name: "Author 1",
      content: "lorem lorem lorem lorem lorem",
      date: "01.01.1970",
      image:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg",
    },
    {
      name: "Author 15",
      content: "lorem lorem lorem lorem lorem",
      date: "01.01.1970",
      image:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg",
    },
  ],
};

const BlogPage = () => {
  const { id } = useParams<Params>();
  const [isClickedOn, setIsClickedOn] = useState(false);

  return (
    <Wrapper>
      <PageWrapper isTop={true}>
        <h3 className="self-start text-2xl font-medium">{mockBlog.title}</h3>
        <div className="flex w-full items-center justify-between self-start bg-gray-50 py-2 px-4">
          <p className="text-xs">
            Автор: <span className="text-blue-500">{mockBlog.author}</span> /
            Добавлено: {mockBlog.datePosted}
          </p>
          <button className="rounded border border-gray-300 py-0.5 px-2 text-xs">
            Добавить в библиотеку
          </button>
        </div>
        <p>{mockBlog.text}</p>
        <div className="w-full border p-6">
          <p className="pb-4">{mockBlog.comments.length} комментариев</p>
          <textarea
            className={`mb-4 flex w-full items-start rounded border bg-gray-50 px-2 py-1 transition-all focus:outline-none ${
              isClickedOn ? "h-44" : ""
            }`}
            onClick={() => setIsClickedOn(true)}
            placeholder="Напишите свой комментарий..."
          />
          {isClickedOn && (
            <div className="mb-4 flex gap-4">
              <PrimaryButton className="text-sm lg:text-sm">
                Добавить
              </PrimaryButton>
              <SecondaryButton
                onClickButton={() => setIsClickedOn(false)}
                className="text-sm lg:text-sm"
              >
                Отменить
              </SecondaryButton>
            </div>
          )}
          <div className="flex flex-col gap-6">
            {mockBlog.comments.map((item) => (
              <CommentElement
                image={item.image}
                name={item.name}
                date={item.date}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </PageWrapper>
    </Wrapper>
  );
};

export default BlogPage;
