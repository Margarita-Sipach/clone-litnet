import { useQuery } from "@tanstack/react-query";
import { BlogResponseType } from "../../../../types/types";
import { getBlogsByUserId } from "../../../../api/service";

const useUserBlogs = (userId: string) => {
  const { data, isError, isLoading, isSuccess } = useQuery<BlogResponseType>({
    queryKey: ["users", userId, "blogs"],
    queryFn: async () => getBlogsByUserId(userId as string),
    staleTime: 1000 * 10,
  });
  return {
    blogs: data?.rows,
    count: data?.count,
    isSuccess,
    isError,
    isLoading,
  };
};
export default useUserBlogs;
