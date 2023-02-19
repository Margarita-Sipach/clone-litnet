import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  addBook,
  checkUser,
  getBlogsByUserId,
  getBooks,
  getBooksByUserId,
  getGenres,
  getImage,
  getUserById,
  loginUser,
  registerUser,
  updateUserById,
  updateUserPassword,
} from "../api/service";
import { useUserContext } from "../components/context/userContext";
import { Router } from "../components/router";
import { LocalStorage } from "../components/storage";
import {
  AccountType,
  BlogResponseType,
  BookResponseType,
  BookType,
  GenreResponseType,
  UserStateType,
} from "../types/types";
import { useState, useEffect, useMemo } from "react";
import { QueryParams } from "../types/api.types";

export const useRegistration = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const {
    mutate: register,
    isError,
    isLoading,
  } = useMutation({
    mutationFn: (data: any) => registerUser(data),
    mutationKey: ["registration"],
    onSuccess: ({ token, user }: any) => {
      setUser(user);
      LocalStorage.setUserToken(token);
      navigate(Router.main);
    },
  });

  return { register, isError, isLoading };
};

export const useLogin = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const {
    mutate: login,
    isError,
    isLoading,
  } = useMutation({
    mutationFn: (data: any) => loginUser(data),
    mutationKey: ["login"],
    onSuccess: ({ token, user }: any) => {
      setUser(user);
      LocalStorage.setUserToken(token);
      navigate(`${Router.users}/${user.id}`);
    },
  });

  return { login, isError, isLoading };
};

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

export const useFetchUserBooks = (userId: string) => {
  const { data, isError, isLoading, isSuccess } = useQuery<BookResponseType>({
    queryKey: ["users", userId, "books"],
    queryFn: async () => getBooksByUserId(userId as string),
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

export const useFetchUserBlogs = (userId: string) => {
  const { data, isError, isLoading, isSuccess } = useQuery<BlogResponseType>({
    queryKey: ["users", userId, "blogs"],
    queryFn: async () => getBlogsByUserId(userId as string),
    staleTime: 1000 * 10,
  });

  return {
    blogs: data?.rows,
    count: data?.count,
    isSuccess,
    isError,
    isLoading,
  };
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
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const { mutate: edit, isError } = useMutation({
    mutationFn: (data: any) => updateUserById(`${user?.id}`, data),
    mutationKey: ["user", "edit-page", user?.id],
    onSuccess: (user: any) => {
      setUser(user);
      navigate(`${Router.users}/${user.id}`);
    },
  });

  return { edit, isError };
};

export const useEditPassword = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const { mutate: editPassword, isError } = useMutation({
    mutationFn: (data: any) => updateUserPassword(data),
    mutationKey: ["user", "edit-password", user?.id],
    onSuccess: ({ user }: any) => {
      setUser(user);
      navigate(`${Router.users}/${user.id}`);
    },
  });

  return { editPassword, isError };
};

export const useFetchBooks = () => {
  const { data, isError, isLoading, isSuccess } = useQuery<BookResponseType>({
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
  const { data, isError, isLoading, isSuccess } = useQuery<GenreResponseType>({
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

export const useCreateBook = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const {
    mutate: createBook,
    isError,
    isLoading,
  } = useMutation({
    mutationFn: (data: any) => addBook(data),
    mutationKey: ["users", user?.id, "books"],
    onSuccess: () => {
      navigate(`${Router.users}/${user?.id}/books`);
    },
  });

  return { createBook, isError, isLoading };
};
