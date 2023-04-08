import { useUserContext } from "../../components/context/userContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { LocalStorage } from "../../components/storage";
import { Router } from "../../components/router";
import { ErrorResponse } from "../../types/types";
import { API } from "../../api/api";
import { AxiosError } from "axios";

export const checkUserPassword = async (data: any) => {
  try {
    await API.loginUser(data);
  } catch (error) {
    throw new Error("Неверный пароль");
  }
};

export const useLogin = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const { mutate: login, ...props } = useMutation({
    mutationFn: (data) => API.loginUser(data),
    mutationKey: ["login"],
    onSuccess: ({ token, user }: any) => {
      setUser(user);
      LocalStorage.setUserToken(token);
      navigate(`${Router.users}/${user.id}`);
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
  });

  return { login, ...props };
};
