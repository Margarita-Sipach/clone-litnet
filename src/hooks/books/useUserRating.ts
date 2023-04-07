import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";

export const useUserRating = (userId: string, bookId: string) => {
  const { data, ...props } = useQuery({
    queryFn: () => API.getRatingByBookUserId(userId, bookId),
    queryKey: ["rating"],
    onError: () => {},
  });

  return { rating: data, ...props };
};
