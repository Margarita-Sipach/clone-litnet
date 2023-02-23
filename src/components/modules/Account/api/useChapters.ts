import { useQuery } from "@tanstack/react-query";
import { ChaptersResponseType } from "../../../../types/types";
import { getChapters } from "../../../../api/service";

const useChapters = (id: string) => {
  const { data, isError, isLoading, isSuccess } =
    useQuery<ChaptersResponseType>({
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
