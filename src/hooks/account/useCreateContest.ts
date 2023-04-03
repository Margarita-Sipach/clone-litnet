import axios, { AxiosError } from "axios";
import { baseUrl } from "../../utils/utils";
import { useMutation } from "@tanstack/react-query";
import { ErrorResponse } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../components/context/userContext";
import { createFormDataWithImage } from "../../utils/formUtils";
import { Router } from "../../components/router";

const createContest = async (formData: FormData) => {
  try {
    const response = await axios.post(`${baseUrl}/contest`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

const useCreateContest = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: any) =>
      createContest(
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

export default useCreateContest;
