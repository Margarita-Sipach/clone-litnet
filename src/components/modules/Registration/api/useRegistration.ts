import { useUserContext } from "../../../context/userContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../../../api/service";
import { LocalStorage } from "../../../storage";
import { Router } from "../../../router";

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
  });
  return { register, isError, isLoading };
};

export default useRegistration;
