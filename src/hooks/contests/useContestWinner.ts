import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponse } from "../../types/types";
import { API } from "../../api/api";
import { notifyError, notifySuccess } from "../../utils/utils";
import { ErrorNotifies, SuccessNotifies } from "../../utils/formUtils";
import { WinnerListType } from "../../types/list.types";
import { QueryParams } from "../../types/api.types";

export const useContestWinner = (
  bookId: string = "",
  params: QueryParams = {}
) => {
  const { data } = useQuery<WinnerListType>({
    queryFn: () => API.getWinnersByBook(bookId, params),
    queryKey: ["applications"],
  });

  const { mutate, ...props } = useMutation({
    mutationFn: (data: { contestId: number; bookId: number }) =>
      API.addWinner(data),
    mutationKey: ["addWinner"],
    onError: (error: AxiosError<ErrorResponse>) => {
      notifyError(ErrorNotifies.ERROR_ADDING_WINNER_TO_CONTEST);
    },
    onSuccess: () => {
      notifySuccess(SuccessNotifies.ADD_WINNER);
    },
  });

  return {
    addWinner: mutate,
    wins: data?.rows,
    count: data?.count,
    ...props,
  };
};
