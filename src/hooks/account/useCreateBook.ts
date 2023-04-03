import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Router } from "../../components/router";
import { useUserContext } from "../../components/context/userContext";
import { baseUrl } from "../../utils/utils";
import axios from "axios";
import { InputNames, createFormDataWithImage } from "../../utils/formUtils";

const createNewBook = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/books`, data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

const createCustomFormData = (data) => {
  const formData = createFormDataWithImage(data);
  formData.append(
    InputNames.GENRE,
    `${data[InputNames.GENRE_FIRST]} ${data[InputNames.GENRE_SECOND]}`
  );
  return formData;
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
    mutationFn: (data: any) =>
      createNewBook(createCustomFormData({ ...data, userId: `${user?.id}` })),
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
