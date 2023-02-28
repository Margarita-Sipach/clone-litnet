import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  checkUser,
  getBookById,
  getBooks,
  getGenres,
  getImage,
  getUserById,
  updateUserById,
  updateUserPassword,
} from "../api/service";
import { useUserContext } from "../components/context/userContext";
import { Router } from "../components/router";
import { LocalStorage } from "../components/storage";
import { AccountType, BookType, UserStateType } from "../types/types";
import { useEffect, useMemo, useState } from "react";
import { fetchUserData } from "../api/data";
import { BookListType, GenreListType } from "../types/list.types";
import { toast } from "react-toastify";

export const useFetchUser = (id: string) => {
  const {
    data: account,
    isError,
    isLoading,
    isSuccess,
  } = useQuery<AccountType>({
    queryKey: ["users", id],
    queryFn: async () => getUserById(id as string),
    staleTime: 1000 * 10,
  });

  return { account, isSuccess, isError, isLoading };
};

export const useUserData = (userId: string) => {
  return useQuery({
    queryFn: () => fetchUserData(userId),
    queryKey: ["userData", userId],
  });
};

export const useCheckingAuth = () => {
  const [user, setUser] = useState<UserStateType>();

  useEffect(() => {
    const oldToken = LocalStorage.getUserToken();
    if (oldToken) {
      (async () => {
        try {
          const { token, user } = await checkUser(oldToken);
          LocalStorage.setUserToken(token);
          setUser(user);
        } catch {
          setUser(null);
        }
      })();
    } else {
      setUser(null);
    }
  }, []);

  return user;
};

export const useImage = (entity: AccountType | BookType) => {
  const image = useMemo(() => {
    return getImage(`/${entity.img}`);
  }, [entity]);

  return image;
};

export const useEditUserPage = () => {
  const { user, setUser, setSelectedUser } = useUserContext();
  const navigate = useNavigate();
  const { mutate: edit, isError } = useMutation({
    mutationFn: (data: any) => updateUserById(`${user?.id}`, data),
    mutationKey: ["user", "edit-page", user?.id],
    onSuccess: (user: any) => {
      setUser(user);
      setSelectedUser(user);
      navigate(`${Router.users}/${user.id}`);
    },
  });

  return { edit, isError };
};

export const useEditPassword = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const {
    mutate: editPassword,
    isError,
    isLoading,
  } = useMutation({
    mutationFn: (data: any) => updateUserPassword(data),
    mutationKey: ["user", "edit-password", user?.id],
    onSuccess: ({ user }: any) => {
      setUser(user);
      navigate(`${Router.users}/${user.id}`);
    },
  });

  return { editPassword, isError, isLoading };
};

export const useFetchBooks = () => {
  const { data, isError, isLoading, isSuccess } = useQuery<BookListType>({
    queryKey: ["books"],
    queryFn: async (params?: any) => getBooks(params),
    staleTime: 1000 * 10,
  });

  return {
    books: data?.rows,
    count: data?.count,
    isSuccess,
    isError,
    isLoading,
  };
};

export const useFetchGenres = () => {
  const { data, isError, isLoading, isSuccess } = useQuery<GenreListType>({
    queryKey: ["genres"],
    queryFn: async (params?: any) => getGenres(params),
  });

  return {
    genres: data?.rows,
    count: data?.count,
    isSuccess,
    isError,
    isLoading,
  };
};

export const useFetchBook = (id: string) => {
  const {
    data: book,
    isError,
    isLoading,
    isSuccess,
  } = useQuery<BookType>({
    queryKey: ["book"],
    queryFn: async () => getBookById(id),
    staleTime: 1000 * 10,
  });

  return {
    book,
    isSuccess,
    isError,
    isLoading,
  };
};

export const notifySuccess = (message: string) => toast.success(message);

export const notifyError = (message: string) => toast.error(message);
