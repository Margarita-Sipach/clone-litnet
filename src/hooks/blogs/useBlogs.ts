import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";
import { QueryParams } from "../../types/api.types";

export const useBlogs = (params: QueryParams = {}) => {
  const { data, ...props } = useQuery({
    queryFn: () => API.getBlogs(params),
    queryKey: ["allBlogs"],
  });

  return {
    blogs: data?.rows,
    count: data?.count,
    ...props,
  };
};
