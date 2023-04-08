import { useQuery } from "@tanstack/react-query";
import { BookListType } from "../../types/list.types";
import { API } from "../../api/api";

export const useFetchUserBooks = (userId: string) => {
  const { data, ...props } = useQuery<BookListType>({
    queryKey: ["users", userId, "books"],
    queryFn: async () => API.getBooksByUserId(userId as string),
  });
  return {
    books: data?.rows,
    count: data?.count,
    ...props,
  };
};
