import { useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";
import { QueryParams } from "../../types/api.types";
import { ApplicationListType } from "../../types/list.types";
import { AxiosError } from "axios";
import { notifyError, notifySuccess } from "../../utils/utils";
import { ErrorNotifies, SuccessNotifies } from "../../utils/formUtils";

export const useApplications = (
  contestId: string,
  params: QueryParams = {}
) => {
  const { data, refetch, ...props } = useQuery<ApplicationListType>({
    queryFn: () => API.getApplicationsByContestId(contestId, params),
    queryKey: ["applications"],
  });

  const { mutate: updateApplication } = useMutation({
    mutationFn: ({ id, ...body }: any) => API.updateApplication(id, body),
    mutationKey: ["updateApplication"],
    onSuccess: () => {
      notifySuccess(SuccessNotifies.UPDATE_APPLICATION);
      refetch();
    },
    onError: (error: AxiosError) => {
      notifyError(ErrorNotifies.ERROR_UPDATING_APPLICATION);
    },
  });

  const { mutate: removeApplication } = useMutation({
    mutationFn: (id: string) => API.removeApplication(id),
    mutationKey: ["removeApplication"],
    onSuccess: () => {
      notifySuccess(SuccessNotifies.REMOVE_APPLICATION);
      refetch();
    },
    onError: (error: AxiosError) => {
      notifyError(ErrorNotifies.ERROR_REMOVING_APPLICATION);
    },
  });

  return {
    applications: data?.rows,
    count: data?.count,
    updateApplication,
    removeApplication,
    ...props,
  };
};
