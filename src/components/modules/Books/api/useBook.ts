import axios from "axios";
import { DetailedBookType } from "../../../../types/types";
import { baseUrl } from "../../../../utils/utils";
import { useQuery } from "@tanstack/react-query";

const fetchBookById = async (bookId: string) => {
  try {
    const response = await axios.get(`${baseUrl}/books/${bookId}`);
    if (response.status === 200) {
      const data: DetailedBookType = response.data;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

const useBook = (bookId: string) => {
  return useQuery({
    queryFn: () => fetchBookById(bookId),
    queryKey: [bookId, "book"],
  });
};

export default useBook;
