import axios from "axios";
import { GenreType } from "../../../../types/types";
import { baseUrl } from "../../../../utils/utils";
import { useQuery } from "@tanstack/react-query";

const fetchGenres = async () => {
  try {
    const response = await axios.get(`${baseUrl}/genre`);
    if (response.status === 200) {
      const data: GenreType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

export const useGenres = () => {
  return useQuery({
    queryFn: fetchGenres,
    queryKey: ["allGenres"],
  });
};

export default useGenres;
