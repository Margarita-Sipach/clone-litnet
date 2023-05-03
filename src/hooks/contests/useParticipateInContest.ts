import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponse } from "../../types/types";
import { API } from "../../api/api";
import { notifyError, notifySuccess } from "../../utils/utils";
import { ErrorNotifies, SuccessNotifies } from "../../utils/formUtils";

export const useParticipateInContest = () => {
  const { mutate, ...props } = useMutation({
    mutationFn: (data: { contestId: number; bookId: number }) =>
      API.addBookToContest(data),
    mutationKey: ["addBookToContest"],
    onError: (error: AxiosError<ErrorResponse>) => {
      notifyError(ErrorNotifies.ERROR_ADDING_BOOK_TO_CONTEST);
    },
    onSuccess: () => {
      notifySuccess(SuccessNotifies.ADD_BOOK_TO_CONTEST);
    },
  });

  return { addBook: mutate, ...props };
};
