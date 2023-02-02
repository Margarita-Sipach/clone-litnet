import { Avatar } from "../avatar";
import { ElementWrapper } from "../element-wrapper";
import { AiFillEye } from "react-icons/ai";
import { Date } from "../date";

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
    <ElementWrapper className="flex flex-col w-full gap-y-5 h-32 relative">
      <div className="text-xl">{blog.title}</div>
      <Date date={blog.date} className="absolute top-3 right-3"></Date>
      <div className="text-sm overflow-ellipsis overflow-hidden">
        {blog.text}
      </div>
    </ElementWrapper>
  );
};
