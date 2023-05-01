import { useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";
import { QueryParams } from "../../types/api.types";
import { UserListType } from "../../types/list.types";
import { notifyError, notifySuccess } from "../../utils/utils";
import { ErrorNotifies, SuccessNotifies } from "../../utils/formUtils";
import { AxiosError } from "axios";

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

  const { mutate: banUser, isLoading: isUpdateLoading } = useMutation({
    mutationFn: ({ id, ...body }: any) => API.banUser({ userId: +id, ...body }),
    mutationKey: ["updateUser"],
    onSuccess: () => {
      notifySuccess(SuccessNotifies.BAN_SUCCESS);
      originalRefetch();
    },
    onError: (error: AxiosError) => {
      notifyError(ErrorNotifies.BAN_ERROR);
    },
  });

  const refetch = debounce(originalRefetch, delay);

  return {
    users: data?.rows,
    count: data?.count,
    banUser,
    isUpdateLoading,
    refetch,
    ...props,
  };
};
