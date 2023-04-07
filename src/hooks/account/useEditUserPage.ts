import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../components/context/userContext";
import { Router } from "../../components/router";
import { InputNames, createFormDataWithImage } from "../../utils/formUtils";
import { API } from "../../api/api";

const createCustomFormData = ({ readingView, ...data }): any => {
  const formData = createFormDataWithImage(data);
  formData.append(InputNames.READING_VIEW, readingView);
  return formData;
};

export const useEditUserPage = () => {
  const { user, setUser, setSelectedUser } = useUserContext();
  const navigate = useNavigate();
  const { mutate: edit, ...props } = useMutation({
    mutationFn: (data: any) =>
      API.updateUserById(`${user?.id}`, createCustomFormData(data)),
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

  return { edit, ...props };
};
