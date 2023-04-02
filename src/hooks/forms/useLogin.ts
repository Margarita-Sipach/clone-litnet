import { useUserContext } from "../../components/context/userContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { LocalStorage } from "../../components/storage";
import { Router } from "../../components/router";
import axios, { AxiosError } from "axios";
import { baseUrl } from "../../utils/utils";
import { ErrorResponse } from "../../types/types";

const loginUser = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

const useLogin = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const {
    mutate: login,
    isError,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (data) => loginUser(data),
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

  return { login, isError, isLoading, error };
};

export default useLogin;
