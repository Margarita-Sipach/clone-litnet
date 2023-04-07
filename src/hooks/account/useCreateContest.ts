import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { ErrorResponse } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../components/context/userContext";
import { createFormDataWithImage } from "../../utils/formUtils";
import { Router } from "../../components/router";
import { API } from "../../api/api";

export const useCreateContest = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: any) =>
      API.createContest(
        createFormDataWithImage({ ...data, userId: `${user?.id}` })
      ),
    mutationKey: ["createContest"],
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
    onSuccess: () => {
      navigate(`${Router.users}/${user?.id}`);
    },
  });
};
