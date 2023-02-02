import { Avatar } from "../avatar";
import { ElementWrapper } from "../element-wrapper";
import {AiFillEye} from "react-icons/ai";

interface BlogElementProps {
  onClick?: () => void;
  blog: {
    img: string;
		author: string;
    date: string;
    title: string;
    text: string;
		commentCount: number
  };
}

export const BlogElement = ({ blog }: BlogElementProps) => {
  return (
    <ElementWrapper className="flex flex-col justify-between w-full gap-y-4 h-52 relative">
      <div className="text-base">{blog.title}</div>
			<Avatar image={blog.img} name={blog.author} date={blog.date}></Avatar>
			<div className="text-sm overflow-ellipsis overflow-hidden h-40">{blog.text}</div>
			<div className="absolute right-3 top-3 text-xs flex items-center gap-1"><AiFillEye className="text-indigo-400 text-sm"/> {blog.commentCount}</div>
    </ElementWrapper>
  );
};
