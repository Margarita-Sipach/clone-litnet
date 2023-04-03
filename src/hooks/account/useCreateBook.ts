import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Router } from "../../components/router";
import { useUserContext } from "../../components/context/userContext";
import { baseUrl } from "../../utils/utils";
import axios from "axios";

const createNewBook = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/books`, data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const useCreateBook = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const {
    mutate: createBook,
    isError,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (data: any) => createNewBook(data),
    mutationKey: ["users", user?.id, "books"],
    onSuccess: () => {
      navigate(`${Router.users}/${user?.id}/${Router.books}`);
    },
    onError: (error) => {
      throw error;
    },
  });

  return { createBook, isError, isLoading, error };
};
