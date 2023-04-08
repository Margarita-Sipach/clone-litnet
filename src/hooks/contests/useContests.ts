import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";

export const useContests = () => {
  const { data, ...props } = useQuery({
    queryFn: () => API.getContests(),
    queryKey: ["allContests"],
  });

  return {
    contests: data?.rows,
    count: data?.count,
    ...props,
  };
};
