import axios from "axios";
import { baseUrl } from "../../utils/utils";
import { BlogType } from "../../types/types";
import { useQuery } from "@tanstack/react-query";

const fetchUserBlogs = async (userId: string) => {
  try {
    const response = await axios.get(`${baseUrl}/blog/user/${userId}`);
    if (response.status === 200) {
      const data: BlogType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

const useUserBlogs = (userId: string) => {
  return useQuery({
    queryFn: () => fetchUserBlogs(userId),
    queryKey: ["userBlogs", userId],
  });
};

export default useUserBlogs;
