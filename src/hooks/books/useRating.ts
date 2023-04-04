import axios, { AxiosError } from "axios";
import { baseUrl } from "../../utils/utils";
import { useUserContext } from "../../components/context/userContext";
import { useMutation } from "@tanstack/react-query";
import { ErrorResponse } from "../../types/types";

const rateBook = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/ratings/`, {
      ...data,
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const useRating = (bookId, refetchBook) => {
  const { user } = useUserContext();
  const {
    mutate: createRating,
    isError,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (data: any) =>
      rateBook({ rating: Number(data.rating), bookId, userId: user?.id }),
    mutationKey: ["rateBook"],
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
    onSuccess: () => {
      refetchBook();
    },
  });
  return { createRating, isError, isLoading, error };
};
