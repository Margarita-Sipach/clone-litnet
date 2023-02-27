import axios from "axios";
import { baseUrl } from "../../../../utils/utils";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponse } from "../../../../types/types";

const addBookToContest = async (contestId: string, bookId: string) => {
  try {
    const response = await axios.post(
      `${baseUrl}/contest/${contestId}/addBook/${bookId}`
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

const useParticipateInContest = (contestId: string, bookId: string) => {
  return useMutation({
    mutationFn: () => addBookToContest(contestId, bookId),
    mutationKey: ["addBookToContest"],
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
  });
};

export default useParticipateInContest;
