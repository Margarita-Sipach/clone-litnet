import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";

export const useContest = (contestId: string) => {
  const { data, ...props } = useQuery({
    queryFn: () => API.getContestById(contestId),
    queryKey: [contestId, "contest"],
  });

  return { contest: data, ...props };
};
