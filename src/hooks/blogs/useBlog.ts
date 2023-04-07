import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";

export const useBlog = (blogId: string) => {
  const { data: blog, ...props } = useQuery({
    queryFn: () => API.getBlogById(blogId),
    queryKey: ["blog", blogId],
  });

  return { blog, ...props };
};
