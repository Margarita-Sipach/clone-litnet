import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";
import { QueryParams } from "../../types/api.types";
import { UserListType } from "../../types/list.types";

let timeoutId;

const debounce = (func: any, delay: number) => {
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const useUsers = (params: QueryParams = {}, delay = 1000) => {
  const {
    data,
    refetch: originalRefetch,
    ...props
  } = useQuery<UserListType>({
    queryKey: ["users"],
    queryFn: async () => API.getUsers(params),
  });

  const refetch = debounce(originalRefetch, delay);

  return { users: data?.rows, count: data?.count, refetch, ...props };
};
