import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../utils/utils";

const updateChapter = async (id, data) => {
  try {
    const response = await axios.patch(`${baseUrl}/chapters/${id}`, data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

const useEditChapter = (id: string) => {
  const navigate = useNavigate();
  const {
    mutate: editChapter,
    isError,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (data: any) => updateChapter(`${id}`, data),
    mutationKey: ["chapters", id],
    onSuccess: () => {
      navigate(-1);
    },
    onError: (error) => {
      throw error;
    },
  });

  return { editChapter, isError, isLoading, error };
};

export default useEditChapter;
