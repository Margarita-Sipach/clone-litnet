import { useQuery } from "@tanstack/react-query";
import { ChapterType } from "../../types/types";
import { API } from "../../api/api";

export const useChapter = (id: string) => {
  const { data: chapter } = useQuery<ChapterType>({
    queryKey: ["chapters", id],
    queryFn: async () => API.getChapterById(id),
  });

  return { chapter };
};
