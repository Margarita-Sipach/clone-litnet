import axios from "axios";
import { baseUrl } from "../../utils/utils";
import { BlogType } from "../../types/types";
import { useQuery } from "@tanstack/react-query";

const fetchBlogById = async (blogId: string) => {
  try {
    const response = await axios.get(`${baseUrl}/blog/${blogId}`);
    if (response.status === 200) {
      const data: BlogType = response.data;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

const useBlog = async (blogId: string) => {
  return useQuery({
    queryFn: () => fetchBlogById(blogId),
    queryKey: ["blog", blogId],
  });
};

export default useBlog;
