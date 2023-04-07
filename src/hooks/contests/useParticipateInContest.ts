import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponse } from "../../types/types";
import { API } from "../../api/api";

export const useParticipateInContest = (contestId: string, bookId: string) => {
  const { mutate, ...props } = useMutation({
    mutationFn: () => API.addBookToContest(bookId, contestId),
    mutationKey: ["addBookToContest"],
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
  });

  return { addBook: mutate, ...props };
};
