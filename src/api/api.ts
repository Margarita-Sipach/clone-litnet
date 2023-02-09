import { FetchArguments, QueryParams } from "../types/api.types";

enum API_URLS {
  BASE_URL = "https://litnet.herokuapp.com",
  BOOKS = "/books",
  BOOKS_BY_ID = "/books/:id",
  BOOKS_BY_USER_ID = "books/user/:id",
  BOOKS_BY_GENRE_NAME = "books/genre",
  USERS = "/users",
  USERS_BY_ID = "/users/:id",
  USERS_AVATAR = "/users/avatar/:id",
  USER_REGISTER = "/registration",
  USER_LOGIN = "/login",
}

export class API {
  private static URLS = API_URLS;

  private static fetch = async ({
    url = "",
    params = {},
    options = { method: "GET" },
  }: FetchArguments) => {
    const fetchUrl = `${API.URLS.BASE_URL}${url}${API.createQueryString(
      params
    )}`;
    return await fetch(fetchUrl, options);
  };

  private static createQueryString = (params: QueryParams) => {
    const queryString = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&");
    return queryString.length ? `?${queryString}` : "";
  };

  private static delete = async (url: string) => {
    const fetchArguments: FetchArguments = {
      url,
      options: { method: "DELETE" },
    };
    return await API.fetch(fetchArguments);
  };

  private static update = async (url: string, body: any) => {
    const fetchArguments: FetchArguments = {
      url,
      options: { method: "PATCH", body: JSON.stringify(body) },
    };
    return await API.fetch(fetchArguments);
  };

  private static post = async (url: string, body: any) => {
    const fetchArguments: FetchArguments = {
      url,
      options: { method: "POST", body: JSON.stringify(body) },
    };
    return await API.fetch(fetchArguments);
  };

  private static get = async (url: string, params: QueryParams = {}) => {
    const fetchArguments: FetchArguments = {
      url,
      params,
      options: { method: "GET" },
    };
    return await API.fetch(fetchArguments);
  };

  public static getBooks = async (params: QueryParams = {}) => {
    const url = API.URLS.BOOKS;
    return await API.get(url, params);
  };

  public static getBookById = async (id: string) => {
    const url = API.URLS.BOOKS_BY_ID.replace(":id", id);
    return await API.get(url);
  };

  public static getBooksByUserId = async (id: string) => {
    const url = API.URLS.BOOKS_BY_USER_ID.replace(":id", id);
    return await API.get(url);
  };

  public static getBooksByGenreName = async (params: QueryParams = {}) => {
    const url = API.URLS.BOOKS_BY_GENRE_NAME;
    return await API.get(url, params);
  };

  public static deleteBookById = async (id: string) => {
    const url = API.URLS.BOOKS_BY_ID.replace(":id", id);
    return await API.delete(url);
  };

  public static updateBookById = async (id: string, body: any) => {
    const url = API.URLS.BOOKS_BY_ID.replace(":id", id);
    return await API.update(url, body);
  };

  public static getUsers = async (params: QueryParams = {}) => {
    const url = API.URLS.USERS;
    return await API.get(url, params);
  };

  public static getUserById = async (id: string) => {
    const url = API.URLS.USERS_BY_ID.replace(":id", id);
    return await API.get(url);
  };

  public static deleteUserById = async (id: string) => {
    const url = API.URLS.USERS_BY_ID.replace(":id", id);
    return await API.delete(url);
  };

  public static updateUserById = async (id: string, body: any) => {
    const url = API.URLS.USERS_BY_ID.replace(":id", id);
    return await API.update(url, body);
  };

  public static getUserAvatar = async (id: string) => {
    const url = API.URLS.USERS_AVATAR.replace(":id", id);
    return await API.get(url);
  };

  public static registerUser = async (body: any) => {
    const url = API.URLS.USER_REGISTER;
    return await API.post(url, body);
  };

  public static loginUser = async (body: any) => {
    const url = API.URLS.USER_LOGIN;
    return await API.post(url, body);
  };
}
