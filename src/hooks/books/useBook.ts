import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";

export const useBook = (bookId: string) => {
  const { data, ...props } = useQuery({
    queryFn: () => API.getBookById(bookId),
    queryKey: ["book", bookId],
  });

  return { book: data, ...props };
};
