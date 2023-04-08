import { useQuery } from "@tanstack/react-query";
import { CommentTypes } from "./usePostComment";
import { API } from "../../api/api";
import { CommentTypeList } from "../../types/list.types";

export const useComments = (
  commentType: CommentTypes.BLOG | CommentTypes.BOOK | CommentTypes.CONTEST,
  id: string,
  dependentData?: any
) => {
  let queryFunction: () => Promise<any>;

  switch (commentType) {
    case CommentTypes.BOOK:
      queryFunction = () => API.getBookCommentByBookId(id);
      break;
    case CommentTypes.BLOG:
      queryFunction = () => API.getBlogCommentByBlogId(id);
      break;
    case CommentTypes.CONTEST:
      queryFunction = () => API.getContestCommentByContestId(id);
      break;
    default:
      break;
  }
  const { data, ...props } = useQuery<CommentTypeList | undefined>({
    queryFn: () => queryFunction(),
    queryKey: ["comments", commentType, id],
    [dependentData && "enabled"]: !!dependentData,
  });

  return { comments: data?.rows, count: data?.count, ...props };
};
