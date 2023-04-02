import { useUserContext } from "../../components/context/userContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../service";
import { LocalStorage } from "../../components/storage";
import { Router } from "../../components/router";

const useLogin = () => {
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

export default useLogin;
