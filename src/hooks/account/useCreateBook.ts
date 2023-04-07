import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Router } from "../../components/router";
import { useUserContext } from "../../components/context/userContext";
import { InputNames, createFormDataWithImage } from "../../utils/formUtils";
import { API } from "../../api/api";

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
  const { mutate: createBook, ...props } = useMutation({
    mutationFn: (data: any) =>
      API.addBook(createCustomFormData({ ...data, userId: `${user?.id}` })),
    mutationKey: ["users", user?.id, "books"],
    onSuccess: () => {
      navigate(`${Router.users}/${user?.id}/${Router.books}`);
    },
    onError: (error) => {
      throw error;
    },
  });

  return { createBook, ...props };
};
