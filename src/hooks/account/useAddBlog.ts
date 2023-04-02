import axios, { AxiosError } from "axios";
import { baseUrl } from "../../utils/utils";
import { useMutation } from "@tanstack/react-query";
import { ErrorResponse } from "../../types/types";

type BlogParams = {
  userId: string;
  title: string;
  text: string;
};

const createBlog = async (title: string, text: string, userId: string) => {
  try {
    const response = await axios.post(`${baseUrl}/blog`, {
      title,
      text,
      userId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const useCreateBlog = ({ userId, title, text }: BlogParams) => {
  return useMutation({
    mutationFn: () => createBlog(title, text, userId),
    mutationKey: ["createBlog"],
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
  });
};

export default useCreateBlog;
