import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";

export const useBlogs = () => {
  const { data, ...props } = useQuery({
    queryFn: () => API.getBlogs(),
    queryKey: ["allBlogs"],
  });

  return {
    blogs: data?.rows,
    count: data?.count,
    ...props,
  };
};
