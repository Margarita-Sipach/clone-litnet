import axios, { AxiosError } from "axios";
import { baseUrl } from "../../utils/utils";
import { useMutation } from "@tanstack/react-query";
import { ErrorResponse } from "../../types/types";
import { useUserContext } from "../../components/context/userContext";
import { useNavigate } from "react-router-dom";
import { Router } from "../../components/router";

const createBlog = async (data, userId: string) => {
  try {
    const response = await axios.post(`${baseUrl}/blog`, {
      ...data,
      userId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useCreateBlog = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data) => createBlog(data, `${user?.id}`),
    mutationKey: ["createBlog"],
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
    onSuccess: () => {
      navigate(`${Router.users}/${user?.id}/${Router.blogs}`);
    },
  });
};
