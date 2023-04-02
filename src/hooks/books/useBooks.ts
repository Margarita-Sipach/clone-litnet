import axios from "axios";
import { BookType } from "../../types/types";
import { baseUrl } from "../../utils/utils";
import { useQuery } from "@tanstack/react-query";

const fetchBooks = async () => {
  try {
    const response = await axios.get(`${baseUrl}/books`);
    if (response.status === 200) {
      const data: BookType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

const useBooks = () => {
  return useQuery({
    queryFn: fetchBooks,
    queryKey: ["allBooks"],
  });
};

export default useBooks;
