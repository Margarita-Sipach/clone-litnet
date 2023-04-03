import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../../utils/utils";
import axios from "axios";

const addChapter = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/chapters`, data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

const useCreateChapter = () => {
  const navigate = useNavigate();
  const {
    mutate: createChapter,
    isError,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (data: any) => addChapter(data),
    mutationKey: ["chapter"],
    onSuccess: () => {
      navigate(-1);
    },
    onError: (error) => {
      throw error;
    },
  });

  return { createChapter, isError, isLoading, error };
};

export default useCreateChapter;
