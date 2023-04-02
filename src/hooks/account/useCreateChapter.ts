import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addChapter } from "../../api/service";

const useCreateChapter = () => {
  const navigate = useNavigate();
  const {
    mutate: createChapter,
    isError,
    isLoading,
  } = useMutation({
    mutationFn: (data: any) => addChapter(data),
    mutationKey: ["chapter"],
    onSuccess: () => {
      navigate(-1);
    },
  });

  return { createChapter, isError, isLoading };
};

export default useCreateChapter;
