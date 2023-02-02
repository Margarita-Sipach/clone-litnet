import { Avatar } from "../avatar";
import { ElementWrapper } from "../element-wrapper";

interface CommentElementProps {
  comment:{
		image: string;
		name: string;
		date: string;
		content: string;
	}
}

export const CommentElement = ({ comment }: CommentElementProps) => {
  return (
    <ElementWrapper className="w-full flex flex-col justify-center gap-y-4">
        <Avatar image={comment.image} name={comment.name} date={comment.date}/>
        <p className="text-sm">{comment.content}</p>
    </ElementWrapper>
  );
};
