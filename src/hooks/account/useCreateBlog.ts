import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { ErrorResponse } from "../../types/types";
import { useUserContext } from "../../components/context/userContext";
import { useNavigate } from "react-router-dom";
import { Router } from "../../components/router";
import { API } from "../../api/api";

export const useCreateBlog = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  const { mutate, ...props } = useMutation({
    mutationFn: (data: any) =>
      API.createBlog({ ...data, userId: `${user?.id}` }),
    mutationKey: ["createBlog"],
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
    onSuccess: () => {
      navigate(`${Router.users}/${user?.id}/${Router.blogs}`);
    },
  });

  return {
    createBlog: mutate,
    ...props,
  };
};
