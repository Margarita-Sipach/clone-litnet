import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../api/service";
import { useUserContext } from "../components/context/userContext";
import { Router } from "../components/router";
import { LocalStorage } from "../components/storage";

export const useRegistration = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const { mutate: register, isError, isLoading } = useMutation({
    mutationFn: (data: any) => registerUser(data),
    mutationKey: ["registration"],
    onSuccess: ({ token, user }: any) => {
      setUser(user);
      LocalStorage.setUserToken(token);
      navigate(Router.main);
    },
  });

  return {register, isError, isLoading};
};

export const useLogin = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const { mutate: login, isError, isLoading } = useMutation({
    mutationFn: (data: any) => loginUser(data),
    mutationKey: ["login"],
    onSuccess: ({ token, user }: any) => {
      setUser(user);
      LocalStorage.setUserToken(token);
      navigate(`${Router.users}/${user.id}`);
    },
  });

  return {login, isError, isLoading};
}
