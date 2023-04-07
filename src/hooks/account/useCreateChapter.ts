import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { API } from "../../api/api";

export const useCreateChapter = () => {
  const navigate = useNavigate();
  const { mutate: createChapter, ...props } = useMutation({
    mutationFn: (data: any) => API.createChapter(data),
    mutationKey: ["chapter"],
    onSuccess: () => {
      navigate(-1);
    },
    onError: (error) => {
      throw error;
    },
  });

  return { createChapter, ...props };
};
