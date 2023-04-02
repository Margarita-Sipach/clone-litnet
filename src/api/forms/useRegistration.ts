import { useUserContext } from "../../components/context/userContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../service";
import { LocalStorage } from "../../components/storage";
import { Router } from "../../components/router";

const useRegistration = () => {
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
    onError: (error) => console.log(error),
  });
  return { register, isError, isLoading };
};

export default useRegistration;
