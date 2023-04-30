import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";
import { QueryParams } from "../../types/api.types";
import { ApplicationListType } from "../../types/list.types";

export const useApplications = (
  contestId: string,
  params: QueryParams = {}
) => {
  const { data, ...props } = useQuery<ApplicationListType>({
    queryFn: () => API.getApplicationsByContestId(contestId, params),
    queryKey: ["applications"],
  });

  return { applications: data?.rows, count: data?.count, ...props };
};
