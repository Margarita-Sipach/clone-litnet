import { useQuery } from "@tanstack/react-query";
import { CommentType } from "../../types/types";
import { CommentTypes } from "./usePostComment";
import { API } from "../../api/api";

export const useComments = (
  commentType: CommentTypes.BLOG | CommentTypes.BOOK | CommentTypes.CONTEST,
  id: string,
  dependentData?: any
) => {
  let queryFunction: () => Promise<any>;

  switch (commentType) {
    case CommentTypes.BOOK:
      queryFunction = () => API.getBookCommentById(id);
      break;
    case CommentTypes.BLOG:
      queryFunction = () => API.getBlogCommentById(id);
      break;
    case CommentTypes.CONTEST:
      queryFunction = () => API.getContestCommentById(id);
      break;
    default:
      break;
  }
  const { data, ...props } = useQuery<CommentType[] | undefined>({
    queryFn: () => queryFunction(),
    queryKey: ["comments", commentType, id],
    [dependentData && "enabled"]: !!dependentData,
  });

  return { comment: data, ...props };
};
