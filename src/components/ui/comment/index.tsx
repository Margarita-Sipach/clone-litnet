import { GrClose } from "react-icons/gr";
import { Wrapper } from "../wrapper";

interface CommentProps {
  image: string;
  name: string;
  date: string;
  content: string;
}

export const Comment = ({ image, name, date, content }: CommentProps) => {
  return (
    <div className="w-full flex justify-center">
      <Wrapper className="flex flex-col">
        <div className="flex items-center gap-4 mb-3">
          <img
            src={image}
            alt=""
            className="h-8 w-8 object-cover rounded-sm sm:h-10 sm:w-10"
          />
          <div className="text-xl">{name}</div>
          <div className="text-sm text-slate-400">{date}</div>
        </div>
        <p className="text-sm">{content}</p>
      </Wrapper>
    </div>
  );
};
