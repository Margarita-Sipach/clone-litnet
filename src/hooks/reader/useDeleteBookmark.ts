import { ErrorResponse } from "@remix-run/router";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { baseUrl } from "../../utils/utils";
import { useUserContext } from "../../components/context/userContext";
import { notifySuccess } from "..";

const deleteBookmark = async (id: string) => {
  try {
    const response = await axios.delete(`${baseUrl}/bookmark/${id}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const useDeleteBookmark = () => {
  const { user, setUser } = useUserContext();
  return useMutation({
    mutationFn: (id: string) => deleteBookmark(id),
    mutationKey: ["bookmark"],
    onSuccess: (bookmark) => {
      const bookmarks = user!.bookmarks.filter((b) => b.id !== bookmark.id);
      const newUser = { ...user!, bookmarks };
      setUser(newUser);
      notifySuccess("Закладка успешно удалена");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
  });
};
