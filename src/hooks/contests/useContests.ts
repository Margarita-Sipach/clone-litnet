import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";
import { QueryParams } from "../../types/api.types";

export const useContests = (params: QueryParams = {}) => {
  const { data, ...props } = useQuery({
    queryFn: () => API.getContests(params),
    queryKey: ["contests", params],
  });

  return {
    contests: data?.rows,
    count: data?.count,
    ...props,
  };
};
