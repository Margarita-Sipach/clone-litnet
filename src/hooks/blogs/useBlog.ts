import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";

export const useBlog = async (blogId: string) => {
  const { data, ...props } = useQuery({
    queryFn: () => API.getBlogById(blogId),
    queryKey: ["blog", blogId],
  });

  return { blog: data, ...props };
};
