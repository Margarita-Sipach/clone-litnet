import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";
import { QueryParams } from "../../types/api.types";

export const useLibrary = (id: number, params: QueryParams = {}) => {
  const { data, ...props } = useQuery({
    queryFn: () => API.getUserLibrary(`${id}`, params),
    queryKey: ["user", id, "library"],
  });

  return {
    books: data?.rows,
    count: data?.count,
    ...props,
  };
};
