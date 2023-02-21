import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  checkUser,
  getBlogsByUserId,
  getBooksByUserId,
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
  CommentType,
  GenreType,
  UserStateType,
} from "../types/types";
import { useEffect, useMemo, useState } from "react";
import {
  fetchBlogComments,
  fetchBookById,
  fetchBookComments,
  fetchContest,
  fetchContestComments,
  fetchGenres,
  fetchUserData,
} from "../api/data";

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

export const useFetchBooks = (userId: string) => {
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

export const useGenres = () => {
  return useQuery({
    queryFn: fetchGenres,
    queryKey: ["genres"],
  });
};

export const useComments = (
  type: "book" | "blog" | "contest",
  id: string,
  dependentData?: any
) => {
  let queryFunction: (id: string) => Promise<any>;
  if (type === "blog") {
    queryFunction = fetchBlogComments;
  } else if (type === "book") {
    queryFunction = fetchBookComments;
  } else if (type === "contest") {
    queryFunction = fetchContestComments;
  }
  return useQuery<CommentType[] | undefined>({
    queryFn: () => queryFunction(id),
    queryKey: ["comments", type, id],
    [dependentData && "enabled"]: !!dependentData,
  });
};

export const useContest = (contestId: string) => {
  return useQuery({
    queryFn: () => fetchContest(contestId),
    queryKey: [contestId, "contest"],
  });
};

export const useBook = (bookId: string) => {
  return useQuery({
    queryFn: () => fetchBookById(bookId),
    queryKey: [bookId, "book"],
  });
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

export const useUserAvatar = (account: AccountType) => {
  const image = useMemo(() => {
    return getImage(`/${account.img}`);
  }, [account]);

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
