import { useQuery, useMutation } from "@tanstack/react-query";
import { API } from "../../api/api";
import { ModerationListType } from "../../types/list.types";
import { AxiosError } from "axios";
import { notifyError } from "../../utils/utils";
import { ErrorNotifies } from "../../utils/formUtils";

export const useModerators = (contestId: string) => {
  const { data, refetch } = useQuery<ModerationListType>({
    queryKey: ["moderators"],
    queryFn: () => API.getModerators(contestId),
  });

  const {
    mutate: addModerator,
    isError: isAddError,
    error: addError,
  } = useMutation({
    mutationFn: (body: any) => API.addModerator(contestId, body),
    mutationKey: ["addModerator"],
    onSuccess: () => {
      refetch();
    },
    onError: (error: AxiosError) => {
      if (error.request.status === 409)
        notifyError(ErrorNotifies.EXIST_MODERATOR);
    },
  });

  const {
    mutate: removeModerator,
    isError: isRemoveError,
    error: removeError,
  } = useMutation({
    mutationFn: (id: string) => API.removeModerator(id, contestId),
    mutationKey: ["removeModerator"],
    onSuccess: () => {
      refetch();
    },
    onError: (error: AxiosError) => {
      throw error;
    },
  });

  return {
    moderators: data?.rows,
    count: data?.count,
    addModerator,
    removeModerator,
    isAddError,
    addError,
    isRemoveError,
    removeError,
  };
};
