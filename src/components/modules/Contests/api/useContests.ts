import axios from "axios";
import { ContestType } from "../../../../types/types";
import { baseUrl } from "../../../../utils/utils";
import { useQuery } from "@tanstack/react-query";

export const fetchContests = async () => {
  try {
    const response = await axios.get(`${baseUrl}/contest`);
    if (response.status === 200) {
      const data: ContestType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

const useContests = () => {
  return useQuery({
    queryFn: fetchContests,
    queryKey: ["allContests"],
  });
};

export default useContests;
