import { useUserContext } from "../../components/context/userContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { LocalStorage } from "../../components/storage";
import { Router } from "../../components/router";
import axios from "axios";
import { baseUrl } from "../../utils/utils";

const registerUser = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/registration`, data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

const useRegistration = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const {
    mutate: registration,
    isError,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (data: any) => registerUser(data),
    mutationKey: ["registration"],
    onSuccess: ({ token, user }: any) => {
      setUser(user);
      LocalStorage.setUserToken(token);
      navigate(Router.main);
    },
    onError: (error) => {
      throw error;
    },
  });
  return { registration, isError, isLoading, error };
};

export default useRegistration;
