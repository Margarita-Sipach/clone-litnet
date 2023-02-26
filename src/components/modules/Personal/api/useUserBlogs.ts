import { useQuery } from "@tanstack/react-query";
import { getBlogsByUserId } from "../../../../api/service";
import { BlogListType } from "../../../../types/list.types";

const useUserBlogs = (userId: string) => {
  const { data, isError, isLoading, isSuccess } = useQuery<BlogListType>({
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
