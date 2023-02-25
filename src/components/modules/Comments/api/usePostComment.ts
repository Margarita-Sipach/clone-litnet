import axios, { AxiosError } from "axios";
import { baseUrl } from "../../../../utils/utils";
import { useMutation } from "@tanstack/react-query";
import useComments from "./useComments";
import { ErrorResponse } from "../../../../types/types";

type CommentParams = {
  commentType: "blog" | "book" | "contest";
  id: string;
  userId: string;
  text: string;
};

const postBlogComment = async (
  blogId: string | number,
  userId: string | number,
  text: string
) => {
  try {
    const response = await axios.post(`${baseUrl}/blog-comment`, {
      blogId,
      userId,
      text,
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

const postBookComment = async (
  bookId: string | number,
  userId: string | number,
  text: string
) => {
  try {
    const response = await axios.post(`${baseUrl}/book-comments`, {
      bookId,
      userId,
      text,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    throw error;
  }
};

const postContestComment = async (
  contestId: string | number,
  userId: string | number,
  text: string
) => {
  try {
    const response = await axios.post(`${baseUrl}/contest-comment`, {
      contestId,
      userId,
      text,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

const usePostComment = ({ id, userId, commentType, text }: CommentParams) => {
  const { refetch } = useComments(commentType, id);
  let mutationFunction: (
    id: string | number,
    userId: string | number,
    text: string
  ) => Promise<any>;
  if (commentType === "blog") {
    mutationFunction = postBlogComment;
  } else if (commentType === "book") {
    mutationFunction = postBookComment;
  } else if (commentType === "contest") {
    mutationFunction = postContestComment;
  }
  return useMutation({
    mutationFn: () => mutationFunction(id, userId, text),
    mutationKey: [id, commentType],
    onSuccess: refetch,
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
  });
};

export default usePostComment;
