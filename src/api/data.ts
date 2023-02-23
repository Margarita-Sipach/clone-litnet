//TODO: improve typing
import axios from "axios";
import { BlogType } from "../types/types";

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

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${baseUrl}/blog`);
    if (response.status === 200) {
      const data: BlogType[] = response.data.rows;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

export const fetchBlogById = async (blogId: string) => {
  try {
    const response = await axios.get(`${baseUrl}/blog/${blogId}`);
    if (response.status === 200) {
      const data: BlogType = response.data;
      return data;
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

export const createBlog = async (
  title: string,
  text: string,
  userId: string
) => {
  const response = await axios.post(`${baseUrl}/blog`, {
    title,
    text,
    userId,
  });
  return response.data;
};

export const createContest = async (formData: FormData) => {
  try {
    const response = await axios.post(`${baseUrl}/contest`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 200) {
      return response.data;
    }
    return response.data;
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};
