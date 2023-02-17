import { ElementWrapper } from "../element-wrapper";
import { Date } from "../date";
import { createDate } from "../../../utils/utils";

interface PersonalBlogElementProps {
  onClick?: () => void;
  blog: {
    date: string;
    title: string;
    text: string;
  };
}

export const PersonalBlogElement = ({ blog }: PersonalBlogElementProps) => {
  return (
    <ElementWrapper className="relative flex h-32 w-full flex-col gap-y-5">
      <div className="text-xl">{blog.title}</div>
      <Date
        date={createDate(blog.date)}
        className="absolute top-3 right-3"
      ></Date>
      <div className="overflow-hidden overflow-ellipsis text-sm">
        {blog.text}
      </div>
    </ElementWrapper>
  );
};
