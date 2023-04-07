import { useQuery } from "@tanstack/react-query";
import { QueryParams } from "../../types/api.types";
import { API } from "../../api/api";
import { BookListType } from "../../types/list.types";

export const useBooks = (params: QueryParams = {}) => {
  const { data, ...props } = useQuery<BookListType>({
    queryKey: ["books"],
    queryFn: async () => API.getBooks(params),
  });

  return {
    books: data?.rows,
    count: data?.count,
    ...props,
  };
};
