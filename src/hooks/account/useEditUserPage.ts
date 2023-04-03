import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../components/context/userContext";
import { Router } from "../../components/router";
import { baseUrl } from "../../utils/utils";
import { InputNames, createFormDataWithImage } from "../../utils/formUtils";

const updateUserById = async (id, data) => {
  try {
    const response = await axios.patch(`${baseUrl}/users/${id}`, data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

const createCustomFormData = ({ readingView, ...data }): any => {
  const formData = createFormDataWithImage(data);
  formData.append(InputNames.READING_VIEW, readingView);
  return formData;
};

export const useEditUserPage = () => {
  const { user, setUser, setSelectedUser } = useUserContext();
  const navigate = useNavigate();
  const {
    mutate: edit,
    isError,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (data: any) =>
      updateUserById(`${user?.id}`, createCustomFormData(data)),
    mutationKey: ["user", "edit-page", user?.id],
    onSuccess: (user: any) => {
      setUser(user);
      setSelectedUser(user);
      navigate(`${Router.users}/${user.id}`);
    },
    onError: (error) => {
      throw error;
    },
  });

  return { edit, isError, isLoading, error };
};
