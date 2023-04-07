import { useQuery } from "@tanstack/react-query";
import { ChaptersListType } from "../../types/list.types";
import { API } from "../../api/api";

export const useChapters = (id: string) => {
  const { data, ...props } = useQuery<ChaptersListType>({
    queryKey: ["chapters"],
    queryFn: async () => API.getChaptersByBookId(id),
    staleTime: 1000,
  });

  return {
    chapters: data?.rows,
    count: data?.count,
    ...props,
  };
};
