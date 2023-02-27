import { useQuery } from "@tanstack/react-query";
import { getChapters } from "../../../../api/service";
import { ChaptersListType } from "../../../../types/list.types";

const useChapters = (id: string) => {
  const { data, isError, isLoading, isSuccess } = useQuery<ChaptersListType>({
    queryKey: ["chapters"],
    queryFn: async () => getChapters(id),
    staleTime: 1000,
  });

  return {
    chapters: data?.rows,
    count: data?.count,
    isSuccess,
    isError,
    isLoading,
  };
};

export default useChapters;
