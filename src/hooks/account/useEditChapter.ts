import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { API } from "../../api/api";

const useEditChapter = (id: string) => {
  const navigate = useNavigate();
  const { mutate: editChapter, ...props } = useMutation({
    mutationFn: (data: any) => API.updateChapterById(`${id}`, data),
    mutationKey: ["chapters", id],
    onSuccess: () => {
      navigate(-1);
    },
    onError: (error) => {
      throw error;
    },
  });

  return { editChapter, ...props };
};

export default useEditChapter;
