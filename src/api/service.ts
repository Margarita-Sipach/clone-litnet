import { QueryParams } from "../types/api.types";
import { API } from "./api";

export const registerUser = async (body: any) => {
  const response = await API.registerUser(body);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) =>
      rej("User with this email or name exists")
    );
  }
};

export const loginUser = async (body: any) => {
  const response = await API.loginUser(body);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("Incorrect email or password"));
  }
};

export const updateUserById = async (id: string, body: any) => {
  const response = await API.updateUserById(id, body);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("Cannot update user"));
  }
};

export const updateUserPassword = async (body: any) => {
  const response = await API.updateUserPassword(body);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("Cannot update user password"));
  }
};

export const checkUserPassword = async (data: any) => {
  const response = (await API.loginUser(data)) as Response;
  if (!response.ok) throw new Error("Password is incorrect");
};

export const getUserById = async (id: string) => {
  const response = await API.getUserById(id);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("User with such id didn't found"));
  }
};

export const getBooksByUserId = async (id: string) => {
  const response = await API.getBooksByUserId(id);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("This user's books are not found"));
  }
};

export const getBlogsByUserId = async (id: string) => {
  const response = await API.getBlogByUserId(id);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("This user's blogs are not found"));
  }
};

export const getBooks = async (params?: QueryParams) => {
  const response = await API.getBooks(params);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("Books not found"));
  }
};

export const getGenres = async (params?: QueryParams) => {
  const response = await API.getGenres(params);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("Genres not found"));
  }
};

export const checkUser = async (oldToken: string) => {
  const response = await API.checkUser(JSON.stringify({ token: oldToken }));

  if (!response.ok) {
    throw new Error("User is unauthorized");
  }

  return await response.json();
};

export const getImage = (url: string) => {
  return API.getImage(url);
};

export const addBook = async (body: any) => {
  const response = await API.addBook(body);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("Cannot create this book"));
  }
};

export const addChapter = async (body: any) => {
  const response = await API.createChapter(body);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("Cannot create chapter"));
  }
};

export const getChapters = async (id: string) => {
  const response = await API.getChapterByBookId(id);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("Cannot find chapters"));
  }
};

export const updateChapter = async (id: string, body: any) => {
  const response = await API.updateChapterById(id, body);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("Cannot update this chapter"));
  }
};

export const getChapter = async (id: string) => {
  const response = await API.getChapterById(id);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("Cannot find chapter"));
  }
};

export const getBookById = async (id: string) => {
  const response = await API.getBookById(id);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("Cannot find book"));
  }
};

export const updateBook = async (id: string, body: any) => {
  const response = await API.updateBookById(id, body);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("Cannot update this book"));
  }
};
