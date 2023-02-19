import axios from "axios";
import { BlogType, BookType, GenreType, BlogCommentType } from "../types/types";

const baseUrl = "https://litnet.herokuapp.com";

export const fetchUserData = async (userId: string) => {
  const response = await axios.get(`${baseUrl}/users/${userId}`);
  const data: {
    id: string;
    name: string;
    image: string;
  } = response.data;
  return data;
};

export const fetchGenres = async () => {
  const response = await axios.get(`${baseUrl}/genre`);
  const data: GenreType[] = response.data.rows;
  return data;
};

export const fetchBooks = async () => {
  const response = await axios.get(`${baseUrl}/books`);
  const data: BookType[] = response.data.rows;
  return data;
};

export const createBook = async (
  title: string,
  description: string,
  userId: string,
  genres: string
) => {
  const response = await axios.post(`${baseUrl}/books`, {
    title,
    description,
    userId,
    genres,
  });
  return response.data;
};

export const fetchBlogs = async () => {
  const response = await axios.get(`${baseUrl}/blog`);
  const data: BlogType[] = response.data.rows;
  return data;
};

export const fetchBlogById = async (blogId: string) => {
  const response = await axios.get(`${baseUrl}/blog/${blogId}`);
  const data: BlogType = response.data;
  return data;
};

export const fetchBlogComments = async (blogId: string) => {
  const response = await axios.get(`${baseUrl}/blog-comment/blog/${blogId}`);
  const data: BlogCommentType[] = response.data.rows;
  return data;
};

export const createBlog = async (
  title: string,
  text: string,
  userId: string
) => {
  const response = await axios.post(`${baseUrl}/blogs/`, {});
};
