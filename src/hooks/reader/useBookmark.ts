import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";

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
    const response = await API.getBookmarkById(`${id}`);
    return response;
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

export const useBookmark = (id: number | undefined) => {
  const { data, ...props } = useQuery({
    queryFn: () => fetchBookmark(id),
    queryKey: ["bookmark"],
  });

  return { bookmark: data, ...props };
};
