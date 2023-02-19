//TODO: improve typing
import axios from "axios";
import {
  BlogType,
  BookType,
  GenreType,
  BlogCommentType,
  DetailedBookType,
  BookCommentType,
} from "../types/types";

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

export const fetchBookById = async (bookId: string) => {
  const response = await axios.get(`${baseUrl}/books/${bookId}`);
  const data: DetailedBookType = response.data;
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

export const fetchBookComments = async (bookId: string) => {
  const response = await axios.get(`${baseUrl}/book-comments/book/${bookId}`);
  const data: BookCommentType[] = response.data.rows;
  return data;
};

export const postBlogComment = async (
  blogId: string | number,
  userId: string | number,
  text: string
) => {
  const response = await axios.post(`${baseUrl}/blog-comment`, {
    blogId,
    userId,
    text,
  });
  return response.data;
};

export const postBookComment = async (
  bookId: string | number,
  userId: string | number,
  text: string
) => {
  const response = await axios.post(`${baseUrl}/book-comments`, {
    bookId,
    userId,
    text,
  });
  return response.data;
};
