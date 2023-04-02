import axios from "axios";
import { ContestType } from "../../types/types";
import { baseUrl } from "../../utils/utils";
import { useQuery } from "@tanstack/react-query";

export const fetchContest = async (contestId: string) => {
  try {
    const response = await axios.get(`${baseUrl}/contest/${contestId}`);
    if (response.status === 200) {
      const data: ContestType = response.data;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

const useContest = (contestId: string) => {
  return useQuery({
    queryFn: () => fetchContest(contestId),
    queryKey: [contestId, "contest"],
  });
};

export default useContest;
