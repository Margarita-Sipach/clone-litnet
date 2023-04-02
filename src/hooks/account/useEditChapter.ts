import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { updateChapter } from "../../api/service";

const useEditChapter = (id: string) => {
  const navigate = useNavigate();
  const { mutate: editChapter, isError, isLoading } = useMutation({
    mutationFn: (data: any) => updateChapter(`${id}`, data),
    mutationKey: ["chapters", id],
    onSuccess: () => {
      navigate(-1);
    },
  });

  return { editChapter, isError, isLoading };
};

export default useEditChapter;
