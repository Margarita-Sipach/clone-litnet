import { useQuery } from "@tanstack/react-query";
import { BookListType } from "../../types/list.types";
import { API } from "../../api/api";
import { QueryParams } from "../../types/api.types";

export const useFetchUserBooks = (userId: string, params: QueryParams = {}) => {
  const { data, ...props } = useQuery<BookListType>({
    queryKey: ["users", userId, "books"],
    queryFn: async () => API.getBooksByUserId(userId as string, params),
  });
  return {
    books: data?.rows,
    count: data?.count,
    ...props,
  };
};
