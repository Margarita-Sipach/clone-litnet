import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { InputNames, createFormDataWithImage } from "../../utils/formUtils";
import axios from "axios";
import { baseUrl } from "../../utils/utils";

const updateBook = async (id, data) => {
  try {
    const response = await axios.patch(`${baseUrl}/books/${id}`, data);
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

const useEditBook = (id: string) => {
  const navigate = useNavigate();
  const {
    mutate: editBook,
    isError,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (data: any) => updateBook(`${id}`, createCustomFormData(data)),
    mutationKey: ["books", id],
    onSuccess: () => {
      navigate(-1);
    },
    onError: (error) => {
      throw error;
    },
  });

  return { editBook, isError, isLoading, error };
};

export default useEditBook;
