import { AxiosError } from "axios";
import { useUserContext } from "../../components/context/userContext";
import { useMutation } from "@tanstack/react-query";
import { ErrorResponse } from "../../types/types";
import { API } from "../../api/api";

export const useRating = (bookId, refetchBook) => {
  const { user } = useUserContext();
  const { mutate: createRating, ...props } = useMutation({
    mutationFn: (data: any) =>
      API.createRating({
        rating: Number(data.rating),
        bookId,
        userId: user?.id,
      }),
    mutationKey: ["rateBook"],
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
    onSuccess: () => {
      refetchBook();
    },
  });
  return { createRating, ...props };
};
