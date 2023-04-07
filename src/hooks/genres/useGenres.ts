import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";
import { GenreListType } from "../../types/list.types";

export const useGenres = () => {
  const { data, ...props } = useQuery<GenreListType>({
    queryKey: ["genres"],
    queryFn: async (params?: any) => API.getGenres(params),
  });

  return {
    genres: data?.rows,
    count: data?.count,
    ...props,
  };
};
