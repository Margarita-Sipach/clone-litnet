import axios from "axios";
import { BookType, GenreType } from "../types/types";

const baseUrl = "https://litnet.herokuapp.com";

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
