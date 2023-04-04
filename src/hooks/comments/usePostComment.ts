import axios, { AxiosError } from "axios";
import { baseUrl } from "../../utils/utils";
import { useMutation } from "@tanstack/react-query";
import useComments from "./useComments";
import { ErrorResponse } from "../../types/types";
import { useUserContext } from "../../components/context/userContext";

export enum CommentTypes {
  BLOG = "blog",
  BOOK = "book",
  CONTEST = "contest",
}

type CommentParams = {
  commentType: CommentTypes.BLOG | CommentTypes.BOOK | CommentTypes.CONTEST;
  id: string;
};

const postBlogComment = async ({ id, ...data }) => {
  try {
    const response = await axios.post(`${baseUrl}/blog-comment`, {
      blogId: id,
      ...data,
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

const postBookComment = async ({ id, ...data }) => {
  try {
    const response = await axios.post(`${baseUrl}/book-comments`, {
      bookId: id,
      ...data,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    throw error;
  }
};

const postContestComment = async ({ id, ...data }) => {
  try {
    const response = await axios.post(`${baseUrl}/contest-comment`, {
      contestId: id,
      ...data,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

const usePostComment = ({ id, commentType }: CommentParams) => {
  const { refetch } = useComments(commentType, id);
  const { user } = useUserContext();
  let mutationFunction: (data) => Promise<any>;

  switch (commentType) {
    case CommentTypes.BOOK:
      mutationFunction = postBookComment;
      break;
    case CommentTypes.BLOG:
      mutationFunction = postBlogComment;
      break;
    case CommentTypes.CONTEST:
      mutationFunction = postContestComment;
      break;
    default:
      break;
  }

  const mutation = useMutation({
    mutationFn: (data: Record<string, string>) =>
      mutationFunction({ id, userId: user?.id!, ...data }),
    mutationKey: [id, commentType],
    onSuccess: refetch,
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
  });
  const hookStatus = !!user?.id;
  return { ...mutation, hookStatus };
};

export default usePostComment;
