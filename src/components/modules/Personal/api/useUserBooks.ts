import { useQuery } from "@tanstack/react-query";
import { BookResponseType } from "../../../../types/types";
import { getBooksByUserId } from "../../../../api/service";

const useFetchUserBooks = (userId: string) => {
  const { data, isError, isLoading, isSuccess } = useQuery<BookResponseType>({
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
