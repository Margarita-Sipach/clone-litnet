import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../components/context/userContext";
import { Router } from "../../components/router";
import { baseUrl } from "../../utils/utils";

const updateUserPassword = async (data) => {
  try {
    const response = await axios.patch(`${baseUrl}/auth/password`, data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const useEditPassword = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const {
    mutate: editPassword,
    isError,
    isLoading,
  } = useMutation({
    mutationFn: (data: any) => updateUserPassword(data),
    mutationKey: ["user", "edit-password", user?.id],
    onSuccess: ({ user }: any) => {
      setUser(user);
      navigate(`${Router.users}/${user.id}`);
    },
  });

  return { editPassword, isError, isLoading };
};
