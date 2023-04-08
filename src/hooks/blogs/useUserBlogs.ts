import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";

export const useUserBlogs = (userId: string) => {
  const { data, ...props } = useQuery({
    queryFn: () => API.getBlogsByUserId(userId),
    queryKey: ["userBlogs", userId],
  });

  return { blog: data, ...props };
};
