import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";
import { ContestType } from "../../types/types";

export const useContest = (contestId: string) => {
  const { data, ...props } = useQuery<ContestType>({
    queryFn: () => API.getContestById(contestId),
    queryKey: [contestId, "contest"],
  });

  return { contest: data, ...props };
};
