import { useQuery } from "@tanstack/react-query";
import { getBooksByUserId } from "../../api/service";
import { BookListType } from "../../types/list.types";

const useFetchUserBooks = (userId: string) => {
  const { data, isError, isLoading, isSuccess } = useQuery<BookListType>({
    queryKey: ["users", userId, "books"],
    queryFn: async () => getBooksByUserId(userId as string),
    staleTime: 1000 * 10,
  });
  return {
    books: data?.rows,
    count: data?.count,
    isSuccess,
    isError,
    isLoading,
  };
};

export default useFetchUserBooks;
