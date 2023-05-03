import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { ErrorResponse } from "../../types/types";
import { useUserContext } from "../../components/context/userContext";
import { API } from "../../api/api";
import { useComments } from "./useComments";

export enum CommentTypes {
  BLOG = "blog",
  BOOK = "book",
  CONTEST = "contest",
}

type CommentParams = {
  commentType: CommentTypes.BLOG | CommentTypes.BOOK | CommentTypes.CONTEST;
  id: string;
};

export const usePostComment = ({ id, commentType }: CommentParams) => {
  const { refetch } = useComments(commentType, id);
  const { user } = useUserContext();
  let mutationFunction: (data) => Promise<any>;

  switch (commentType) {
    case CommentTypes.BOOK:
      mutationFunction = (data) =>
        API.createBookComment(id, { bookId: id, userId: user?.id!, ...data });
      break;
    case CommentTypes.BLOG:
      mutationFunction = (data) =>
        API.createBlogComment(id, { blogId: id, userId: user?.id!, ...data });
      break;
    case CommentTypes.CONTEST:
      mutationFunction = (data) =>
        API.createContestComment(id, {
          contestId: id,
          userId: user?.id!,
          ...data,
        });
      break;
    default:
      break;
  }

  const { mutate, ...props } = useMutation({
    mutationFn: (data: Record<string, string>) => mutationFunction(data),
    mutationKey: [id, commentType],
    onSuccess: refetch,
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
  });
  const hookStatus = !!user?.id;
  return { ...props, hookStatus, createComment: mutate };
};
