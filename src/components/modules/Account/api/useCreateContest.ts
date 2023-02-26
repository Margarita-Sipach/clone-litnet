import axios, { AxiosError } from "axios";
import { baseUrl } from "../../../../utils/utils";
import { useMutation } from "@tanstack/react-query";
import { ErrorResponse } from "../../../../types/types";

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

const useCreateContest = (formData: FormData) => {
  return useMutation({
    mutationFn: () => createContest(formData),
    mutationKey: ["createContest"],
    onError: (error: AxiosError<ErrorResponse>) => {
      throw error;
    },
  });
};

export default useCreateContest;
