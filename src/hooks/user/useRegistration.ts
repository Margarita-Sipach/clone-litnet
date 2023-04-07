import { useUserContext } from "../../components/context/userContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { LocalStorage } from "../../components/storage";
import { Router } from "../../components/router";
import { createFormDataWithImage } from "../../utils/formUtils";
import { API } from "../../api/api";

export const useRegistration = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const { mutate: registration, ...props } = useMutation({
    mutationFn: (data: any) => API.registerUser(createFormDataWithImage(data)),
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
  return { registration, ...props };
};
