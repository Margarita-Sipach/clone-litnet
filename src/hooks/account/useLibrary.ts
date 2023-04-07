import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";

export const useLibrary = (id: number) => {
  const { data, ...props } = useQuery({
    queryFn: () => API.getUserLibrary(`${id}`),
    queryKey: ["user", id, "library"],
  });

  return {
    books: data?.rows,
    count: data?.count,
    ...props,
  };
};
