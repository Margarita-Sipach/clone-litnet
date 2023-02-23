import { useQuery } from "@tanstack/react-query";
import {
  BlogCommentType,
  BookCommentType,
  CommentType,
  ContestCommentType,
} from "../../../../types/types";
import axios from "axios";
import { baseUrl } from "../../../../utils/utils";

const fetchContestComments = async (contestId: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}/contest-comment/contest/${contestId}`
    );
    if (response.status === 200) {
      const data: ContestCommentType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

const fetchBlogComments = async (blogId: string) => {
  try {
    const response = await axios.get(`${baseUrl}/blog-comment/blog/${blogId}`);
    if (response.status === 200) {
      const data: BlogCommentType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

const fetchBookComments = async (bookId: string) => {
  try {
    const response = await axios.get(`${baseUrl}/book-comments/book/${bookId}`);
    if (response.status === 200) {
      const data: BookCommentType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

const useComments = (
  type: "book" | "blog" | "contest",
  id: string,
  dependentData?: any
) => {
  let queryFunction: (id: string) => Promise<any>;
  if (type === "blog") {
    queryFunction = fetchBlogComments;
  } else if (type === "book") {
    queryFunction = fetchBookComments;
  } else if (type === "contest") {
    queryFunction = fetchContestComments;
  }
  return useQuery<CommentType[] | undefined>({
    queryFn: () => queryFunction(id),
    queryKey: ["comments", type, id],
    [dependentData && "enabled"]: !!dependentData,
  });
};

export default useComments;
