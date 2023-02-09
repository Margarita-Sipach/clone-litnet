import { FetchArguments, QueryParams } from "../types/api.types";

enum API_URLS {
  BASE_URL = 'https://litnet.herokuapp.com',
  BOOKS = '/books',
  USERS = '/users',
  BOOKS_BY_ID = '/books/:id',
  USERS_BY_ID = '/users/:id',
  BOOKS_BY_USER_ID = 'books/user/:id',
  BOOKS_BY_GENRE_NAME = 'books/genre',
  USERS_AVATAR = '/users/avatar/:id',
}

export class API {
  private static URLS = API_URLS;

  private static fetch = async ({url = '', params = {}, options = {method: 'GET'}}: FetchArguments) => {
    const fetchUrl = `${API.URLS.BASE_URL}${url}${API.createQueryString(params)}`;
    return await fetch(fetchUrl, options)
  }

  private static createQueryString = (params: QueryParams) => {
    const queryString = Object.keys(params).map((key) =>`${key}=${params[key]}`).join('&');
    return queryString.length ? `?${queryString}` : '';
  }
  
  public static getBooks = async (params: QueryParams = {}) => {
    const fetchArguments: FetchArguments = {
      url: API.URLS.BOOKS,
      params,
    }
    return await API.fetch(fetchArguments);
  }

  public static getBookById = async (id: string) => {
    const fetchArguments: FetchArguments = {
      url: API.URLS.BOOKS_BY_ID.replace(':id', id),
    }
    return await API.fetch(fetchArguments);
  }

  public static getUsers = async (params: QueryParams = {}) => {
    const fetchArguments: FetchArguments = {
      url: API.URLS.USERS,
      params,
    }
    return await API.fetch(fetchArguments);
  }
  

}