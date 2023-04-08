import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponse } from "../../types/types";
import { API } from "../../api/api";
import { notifyError, notifySuccess } from "../../utils/utils";
import { ErrorNotifies, SuccessNotifies } from "../../utils/formUtils";

export const useDropOutContest = (contestId: string, bookId: string) => {
  const { mutate, ...props } = useMutation({
    mutationFn: () => API.removeBookFromContest(bookId, contestId),
    mutationKey: ["dropBookToContest"],
    onError: (error: AxiosError<ErrorResponse>) => {
      notifyError(ErrorNotifies.ERROR_DROP_BOOK_OUT_CONTEST);
    },
    onSuccess: () => {
      notifySuccess(SuccessNotifies.DROP_BOOK_OUT_CONTEST);
    },
  });

  return { dropBook: mutate, ...props };
};
