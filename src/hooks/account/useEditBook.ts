import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
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

export const useEditBook = (id: string) => {
  const navigate = useNavigate();
  const { mutate: editBook, ...props } = useMutation({
    mutationFn: (data: any) =>
      API.updateBookById(`${id}`, createCustomFormData(data)),
    mutationKey: ["books", id],
    onSuccess: () => {
      navigate(-1);
    },
    onError: (error) => {
      throw error;
    },
  });

  return { editBook, ...props };
};
