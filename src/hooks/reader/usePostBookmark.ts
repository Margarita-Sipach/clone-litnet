import { ErrorResponse } from "@remix-run/router";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { baseUrl } from "../../utils/utils";
import { useUserContext } from "../../components/context/userContext";

interface BookmarkPostType {
  chapterId: number;
  pageId: number;
  bookId: number;
  userId: number;
}

const postBookmark = async (bookmark: BookmarkPostType) => {
  try {
    const response = await axios.post(`${baseUrl}/bookmark`, { ...bookmark });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const usePostBookmark = () => {
  const { user, setUser } = useUserContext();
  return useMutation({
    mutationFn: (bookmark: BookmarkPostType) => postBookmark(bookmark),
    mutationKey: ["bookmark"],
    onSuccess: (bookmark) => {
      const bookmarks = user!.bookmarks.map((b) =>
        b.id === bookmark.id ? bookmark : b
      );
      const newUser = { ...user!, bookmarks };
      setUser(newUser);
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
  });
};
