import { useQuery } from "@tanstack/react-query";
import { BlogListType } from "../../types/list.types";
import { API } from "../../api/api";

export const useUserBlogs = (userId: string) => {
  const { data, ...props } = useQuery<BlogListType>({
    queryKey: ["users", userId, "blogs"],
    queryFn: async () => API.getBlogsByUserId(userId as string),
    staleTime: 1000 * 0,
  });
  return {
    blogs: data?.rows,
    count: data?.count,
    ...props,
  };
};
