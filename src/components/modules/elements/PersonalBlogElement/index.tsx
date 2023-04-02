import { ElementWrapper } from "../../../ui/wrappers/ElementWrapper";
import { Date } from "../../../ui/Date";
import { createDate } from "../../../../utils/utils";
import { Link } from "react-router-dom";

interface PersonalBlogElementProps {
  blog: {
    id: string;
    date: string;
    title: string;
    text: string;
  };
}

export const PersonalBlogElement = ({ blog }: PersonalBlogElementProps) => {
  return (
    <Link to={`/blogs/${blog.id}`}>
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
    </Link>
  );
};
