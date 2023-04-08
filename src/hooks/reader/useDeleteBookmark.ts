import { ErrorResponse } from "@remix-run/router";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useUserContext } from "../../components/context/userContext";
import { API } from "../../api/api";
import { notifySuccess } from "../../utils/utils";
import { SuccessNotifies } from "../../utils/formUtils";

export const useDeleteBookmark = () => {
  const { user, setUser } = useUserContext();
  return useMutation({
    mutationFn: (id: string) => API.deleteBookmarkById(id),
    mutationKey: ["bookmark"],
    onSuccess: (bookmark) => {
      const bookmarks = user!.bookmarks.filter((b) => b.id !== bookmark.id);
      const newUser = { ...user!, bookmarks };
      setUser(newUser);
      notifySuccess(SuccessNotifies.DELETE_BOOKMARK);
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
  });
};
