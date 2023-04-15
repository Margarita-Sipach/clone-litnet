import { useQuery } from "@tanstack/react-query";
import { QueryParams } from "../../types/api.types";
import { API } from "../../api/api";
import { BookListType } from "../../types/list.types";

export const useUsers = (params: QueryParams = {}) => {
  const { data, ...props } = useQuery<BookListType>({
    queryKey: ["users"],
    queryFn: async () => API.getUsers(params),
  });
console.log(data);
  return {
    users: data?.rows,
    count: data?.count,
    ...props,
  };
};
