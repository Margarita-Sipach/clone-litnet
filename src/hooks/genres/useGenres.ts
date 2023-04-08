import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";
import { GenreListType } from "../../types/list.types";
import { QueryParams } from "../../types/api.types";

export const useGenres = (params: QueryParams = {}) => {
  const { data, ...props } = useQuery<GenreListType>({
    queryKey: ["genres"],
    queryFn: () => API.getGenres(params)
  });

  return {
    genres: data?.rows,
    count: data?.count,
    ...props,
  };
};
