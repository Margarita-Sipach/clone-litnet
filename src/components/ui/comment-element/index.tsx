import { Avatar } from "../avatar";
import { ElementWrapper } from "../element-wrapper";

interface CommentElementProps {
  image: string;
  name: string;
  date: string;
  content: string;
}

export const CommentElement = ({
  image,
  name,
  date,
  content,
}: CommentElementProps) => {
  return (
    <ElementWrapper className="flex w-full flex-col justify-center gap-y-4">
      <Avatar image={image} name={name} date={date} />
      <p className="text-sm">{content}</p>
    </ElementWrapper>
  );
};
