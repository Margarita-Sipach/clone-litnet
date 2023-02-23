import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { updateBook } from "../../../../api/service";

const useEditBook = (id: string) => {
  const navigate = useNavigate();
  const { mutate: editBook, isError } = useMutation({
    mutationFn: (data: any) => updateBook(`${id}`, data),
    mutationKey: ["books", id],
    onSuccess: () => {
      navigate(-1);
    },
  });

  return { editBook, isError };
};

export default useEditBook;
