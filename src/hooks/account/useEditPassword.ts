import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../components/context/userContext";
import { Router } from "../../components/router";
import { API } from "../../api/api";

export const useEditPassword = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const { mutate: editPassword, ...props } = useMutation({
    mutationFn: (data: any) => API.updateUserPassword(data),
    mutationKey: ["user", "edit-password", user?.id],
    onSuccess: ({ user }: any) => {
      setUser(user);
      navigate(`${Router.users}/${user.id}`);
    },
    onError: (error) => {
      throw error;
    },
  });

  return { editPassword, ...props };
};
