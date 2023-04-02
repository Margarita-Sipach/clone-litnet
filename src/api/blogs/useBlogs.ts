import axios from "axios/index";
import { BlogType } from "../../types/types";
import { baseUrl } from "../../utils/utils";
import { useQuery } from "@tanstack/react-query";

const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${baseUrl}/blog`);
    if (response.status === 200) {
      const data: BlogType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

const useBlogs = () => {
  return useQuery({
    queryFn: fetchBlogs,
    queryKey: ["allBlogs"],
  });
};

export default useBlogs;
