import { ErrorResponse } from "@remix-run/router";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useUserContext } from "../../components/context/userContext";
import { API } from "../../api/api";
import { notifySuccess } from "../../utils/utils";
import { SuccessNotifies } from "../../utils/formUtils";

interface BookmarkPostType {
  chapterId: number;
  pageId: number;
  bookId: number;
  userId: number;
}

export const usePostBookmark = () => {
  const { user, setUser } = useUserContext();
  const { mutate, ...props } = useMutation({
    mutationFn: (bookmark: BookmarkPostType) => API.createBookmark(bookmark),
    mutationKey: ["bookmark"],
    onSuccess: (bookmark) => {
      const bookmarks = user!.bookmarks.find((b) => b.id === bookmark.id)
        ? user!.bookmarks.map((b) => (b.id === bookmark.id ? bookmark : b))
        : [...user!.bookmarks, bookmark];
      const newUser = { ...user!, bookmarks };
      setUser(newUser);
      notifySuccess(SuccessNotifies.ADD_BOOKMARK);
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
  });

  return { createBookmark: mutate, ...props };
};
