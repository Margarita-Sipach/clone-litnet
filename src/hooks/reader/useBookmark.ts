import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BookmarkType } from "../../types/types";
import { baseUrl } from "../../utils/utils";

const defaultBookmark = {
  progress: {
    chapterId: 1,
    pageId: 1,
    default: true,
  },
};

const fetchBookmark = async (id: number | undefined) => {
  if (!id) return defaultBookmark;
  try {
    const response = await axios.get(`${baseUrl}/bookmark/${id}`);
    if (response.status === 200) {
      const data: Required<BookmarkType> = response.data;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

export const useBookmark = (id: number | undefined) => {
  return useQuery({
    queryFn: () => fetchBookmark(id),
    queryKey: ["bookmark"],
  });
};
