import axios from "axios";
import { DetailedBookType } from "../../types/types";
import { baseUrl } from "../../utils/utils";
import { useQuery } from "@tanstack/react-query";

const fetchRating = async (userId: string, bookId: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}/ratings/user/${userId}/book/${bookId}`
    );
    if (response.status === 200) {
      const data: DetailedBookType = response.data;
      return data;
    }
  } catch (error: any) {
    throw error;
  }
};

export const useUserRating = (userId: string, bookId: string) => {
  return useQuery({
    queryFn: () => fetchRating(userId, bookId),
    queryKey: ["rating"],
    onError: () => {},
  });
};
