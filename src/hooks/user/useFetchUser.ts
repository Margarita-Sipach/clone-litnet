import { useQuery } from "@tanstack/react-query";
import { AccountType } from "../../types/types";
import { API } from "../../api/api";

export const useFetchUser = (id: string) => {
  const { data: account, ...props } = useQuery<AccountType>({
    queryKey: ["users", id],
    queryFn: async () => API.getUserById(id as string),
    staleTime: 1000 * 10,
  });

  return { account, ...props };
};
