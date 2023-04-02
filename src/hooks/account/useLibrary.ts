import axios from "axios";
import { BookType } from "../../types/types";
import { baseUrl } from "../../utils/utils";
import { useQuery } from "@tanstack/react-query";

const fetchBooks = async (id: number) => {
  try {
    const response = await axios.get(`${baseUrl}/books/library/${id}`);
    if (response.status === 200) {
      const data: BookType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

export const useLibrary = (id: number) => {
  return useQuery({
    queryFn: () => fetchBooks(id),
    queryKey: ["user", id, "library"],
  });
};
