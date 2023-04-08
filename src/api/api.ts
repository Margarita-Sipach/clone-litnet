import axios from "axios";
import { QueryParams } from "../types/api.types";

export enum API_URLS {
  BASE_URL = "https://litnet.herokuapp.com",
  BOOKS = "/books",
  BOOKS_BY_ID = "/books/:id",
  BOOKS_BY_USER_ID = "/books/user/:id",
  BOOKS_BY_GENRE_NAME = "books/genre",
  USER_LIBRARY = "/books/library/:id",
  USERS = "/users",
  USERS_BY_ID = "/users/:id",
  USERS_AVATAR = "/users/avatar/:id",
  USER_REGISTER = "/auth/registration",
  USER_LOGIN = "/auth/login",
  USER_PASSWORD = "/auth/password",
  USER_REFRESH_TOKEN = "/auth/refresh",
  GENRE = "/genre",
  GENRE_BY_NAME = "/genre/:name",
  GENRE_BY_ID = "/genre/:id",
  RATING = "/ratings",
  RATING_BY_ID = "/ratings/:id",
  RATING_BY_USER_ID = "/ratings/user/:id",
  RATING_BY_BOOK_ID = "/ratings/book/:id",
  RATING_BY_BOOK_USER_ID = "/ratings/user/:userId/book/:bookId",
  CONTEST = "/contest",
  CONTEST_BY_ID = "/contest/:id",
  CONTEST_BY_USER_ID = "/contest/user/:id",
  CONTEST_ADD_BOOK = "/contest/:contestId/addBook/:bookId",
  CONTEST_REMOVE_BOOK = "/contest/:contestId/removeBook/:bookId",
  CONTEST_COMMENT = "/contest-comment",
  CONTEST_COMMENT_BY_ID = "/contest-comment/:id",
  CONTEST_COMMENT_BY_USER_ID = "/contest-comment/user/:id",
  CONTEST_COMMENT_BY_CONTEST_ID = "/contest-comment/contest/:id",
  PAGE = "/pages",
  PAGE_BY_ID = "/pages/:id",
  PAGE_BY_CHAPTER_ID = "/pages/chapter/:id",
  CHAPTER = "/chapters",
  CHAPTER_BY_ID = "/chapters/:id",
  CHAPTERS_BY_BOOK_ID = "/chapters/book/:id",
  BOOKS_COMMENT = "/book-comments",
  BOOKS_COMMENT_BY_ID = "/book-comments/:id",
  BOOKS_COMMENT_BY_USER_ID = "/book-comments/user/:id",
  BOOKS_COMMENT_BY_BOOK_ID = "/book-comments/book/:id",
  BOOKMARK = "/bookmark",
  BOOKMARK_BY_ID = "/bookmark/:id",
  BOOKMARK_BY_USER_ID = "/bookmark/user/:id",
  BOOKMARK_BY_BOOK_ID = "/bookmark/book/:id",
  BLOG_COMMENT = "/blog-comment",
  BLOG_COMMENT_BY_ID = "/blog-comment/:id",
  BLOG_COMMENT_BY_USER_ID = "/blog-comment/user/:id",
  BLOG_COMMENT_BY_BLOG_ID = "/blog-comment/blog/:id",
  BLOG = "/blog",
  BLOG_BY_ID = "/blog/:id",
  BLOGS_BY_USER_ID = "/blog/user/:id",
}

export class API {
  private static URLS = API_URLS;
  private static client = axios.create({
    baseURL: API_URLS.BASE_URL,
  });

  private static createQueryString = (params: QueryParams) => {
    const paramsString = Object.keys(params);
    if (!paramsString.length) return "";
    const queryString = paramsString
      .map((key) => `${key}=${params[key]}`)
      .join("&");
    return `?${queryString}`;
  };

  private static get = async (url: string, params: QueryParams = {}) => {
    try {
      const response = await API.client.get(
        `${url}${API.createQueryString(params)}`
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  };

  private static post = async (url: string, data: any) => {
    try {
      const response = await API.client.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  private static update = async (url: string, data: any) => {
    try {
      const response = await API.client.patch(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  private static delete = async (url: string) => {
    try {
      const response = await API.client.delete(url);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  };

  public static getImage = (url: string) => {
    return `${API.URLS.BASE_URL}/${url}`;
  };

  public static getBooks = async (params: QueryParams = {}) => {
    const url = API.URLS.BOOKS;
    return await API.get(url, params);
  };

  public static addBook = async (data) => {
    const url = API.URLS.BOOKS;
    return await API.post(url, data);
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

  public static getUserLibrary = async (id: string) => {
    const url = API.URLS.USER_LIBRARY.replace(":id", id);
    return await API.get(url);
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

  public static checkUser = async (body: any) => {
    const url = API.URLS.USER_REFRESH_TOKEN;
    return await API.post(url, body);
  };

  public static updateUserPassword = async (body: any) => {
    const url = API.URLS.USER_PASSWORD;
    return await API.update(url, body);
  };

  public static loginUser = async (body: any) => {
    const url = API.URLS.USER_LOGIN;
    return await API.post(url, body);
  };

  public static getGenres = async (params: QueryParams = {}) => {
    const url = API.URLS.GENRE;
    return await API.get(url, params);
  };

  public static getGenreByName = async (name: string) => {
    const url = API.URLS.GENRE_BY_NAME.replace(":name", name);
    return await API.get(url);
  };

  public static createGenre = async (body: any) => {
    const url = API.URLS.GENRE;
    return await API.post(url, body);
  };

  public static deleteGenreById = async (id: string) => {
    const url = API.URLS.GENRE_BY_ID.replace(":id", id);
    return await API.delete(url);
  };

  public static updateGenreById = async (id: string, body: any) => {
    const url = API.URLS.GENRE_BY_ID.replace(":id", id);
    return await API.update(url, body);
  };

  public static getRatings = async (params: QueryParams = {}) => {
    const url = API.URLS.RATING;
    return await API.get(url, params);
  };

  public static getRatingById = async (id: string) => {
    const url = API.URLS.RATING_BY_ID.replace(":id", id);
    return await API.get(url);
  };

  public static getRatingByBookUserId = async (
    userId: string,
    bookId: string
  ) => {
    const url = API.URLS.RATING_BY_BOOK_USER_ID.replace(
      ":userId",
      userId
    ).replace(":bookId", bookId);
    return await API.get(url);
  };

  public static getRatingByUserId = async (id: string) => {
    const url = API.URLS.RATING_BY_USER_ID.replace(":id", id);
    return await API.get(url);
  };

  public static getRatingByBookId = async (id: string) => {
    const url = API.URLS.RATING_BY_BOOK_ID.replace(":id", id);
    return await API.get(url);
  };

  public static createRating = async (body: any) => {
    const url = API.URLS.RATING;
    return await API.post(url, body);
  };

  public static updateRatingById = async (id: string, body: any) => {
    const url = API.URLS.RATING_BY_ID.replace(":id", id);
    return await API.update(url, body);
  };

  public static deleteRatingById = async (id: string) => {
    const url = API.URLS.RATING_BY_ID.replace(":id", id);
    return await API.delete(url);
  };

  public static getContestComments = async (params: QueryParams = {}) => {
    const url = API.URLS.CONTEST_COMMENT;
    return await API.get(url, params);
  };

  public static getContestCommentById = async (id: string) => {
    const url = API.URLS.CONTEST_COMMENT_BY_ID.replace(":id", id);
    return await API.get(url);
  };

  public static getContestCommentByContestId = async (id: string) => {
    const url = API.URLS.CONTEST_COMMENT_BY_CONTEST_ID.replace(":id", id);
    return await API.get(url);
  };

  public static getContestCommentByUserId = async (id: string) => {
    const url = API.URLS.CONTEST_COMMENT_BY_USER_ID.replace(":id", id);
    return await API.get(url);
  };

  public static createContestComment = async (body: any) => {
    const url = API.URLS.CONTEST_COMMENT;
    return await API.post(url, body);
  };

  public static updateContestCommentById = async (id: string, body: any) => {
    const url = API.URLS.CONTEST_COMMENT_BY_ID.replace(":id", id);
    return await API.update(url, body);
  };

  public static deleteContestCommentById = async (id: string) => {
    const url = API.URLS.CONTEST_COMMENT_BY_ID.replace(":id", id);
    return await API.delete(url);
  };

  public static getContests = async (params: QueryParams = {}) => {
    const url = API.URLS.CONTEST;
    return await API.get(url, params);
  };

  public static getContestById = async (id: string) => {
    const url = API.URLS.CONTEST_BY_ID.replace(":id", id);
    return await API.get(url);
  };

  public static getContestByUserId = async (id: string) => {
    const url = API.URLS.CONTEST_BY_USER_ID.replace(":id", id);
    return await API.get(url);
  };

  public static createContest = async (body: any) => {
    const url = API.URLS.CONTEST;
    return await API.post(url, body);
  };

  public static updateContestById = async (id: string, body: any) => {
    const url = API.URLS.CONTEST_BY_ID.replace(":id", id);
    return await API.update(url, body);
  };

  public static deleteContestById = async (id: string) => {
    const url = API.URLS.CONTEST_BY_ID.replace(":id", id);
    return await API.delete(url);
  };

  public static addBookToContest = async (
    bookId: string,
    contestId: string,
    body: any = {}
  ) => {
    const url = API.URLS.CONTEST_ADD_BOOK.replace(":bookId", bookId).replace(
      ":contestId",
      contestId
    );
    return await API.post(url, body);
  };

  public static removeBookFromContest = async (
    bookId: string,
    contestId: string
  ) => {
    const url = API.URLS.CONTEST_REMOVE_BOOK.replace(":bookId", bookId).replace(
      ":contestId",
      contestId
    );
    return await API.delete(url);
  };

  public static getPages = async (params: QueryParams = {}) => {
    const url = API.URLS.PAGE;
    return await API.get(url, params);
  };

  public static getPageById = async (id: string) => {
    const url = API.URLS.PAGE_BY_ID.replace(":id", id);
    return await API.get(url);
  };

  public static createPage = async (body: any) => {
    const url = API.URLS.PAGE;
    return await API.post(url, body);
  };

  public static updatePageById = async (id: string, body: any) => {
    const url = API.URLS.PAGE_BY_ID.replace(":id", id);
    return await API.update(url, body);
  };

  public static deletePageById = async (id: string) => {
    const url = API.URLS.PAGE_BY_ID.replace(":id", id);
    return await API.delete(url);
  };

  public static getChapters = async (params: QueryParams = {}) => {
    const url = API.URLS.CHAPTER;
    return await API.get(url, params);
  };

  public static getChapterById = async (id: string) => {
    const url = API.URLS.CHAPTER_BY_ID.replace(":id", id);
    return await API.get(url);
  };

  public static getChaptersByBookId = async (id: string) => {
    const url = API.URLS.CHAPTERS_BY_BOOK_ID.replace(":id", id);
    return await API.get(url);
  };

  public static createChapter = async (body: any) => {
    const url = API.URLS.CHAPTER;
    return await API.post(url, body);
  };

  public static updateChapterById = async (id: string, body: any) => {
    const url = API.URLS.CHAPTER_BY_ID.replace(":id", id);
    return await API.update(url, body);
  };

  public static deleteChapterById = async (id: string) => {
    const url = API.URLS.CHAPTER_BY_ID.replace(":id", id);
    return await API.delete(url);
  };

  public static getBookComments = async (params: QueryParams = {}) => {
    const url = API.URLS.BOOKS_COMMENT;
    return await API.get(url, params);
  };

  public static getBookCommentById = async (id: string) => {
    const url = API.URLS.BOOKS_COMMENT_BY_ID.replace(":id", id);
    return await API.get(url);
  };

  public static getBookCommentByBookId = async (id: string) => {
    const url = API.URLS.BOOKS_COMMENT_BY_BOOK_ID.replace(":id", id);
    return await API.get(url);
  };

  public static getBookCommentByUserId = async (id: string) => {
    const url = API.URLS.BOOKS_COMMENT_BY_USER_ID.replace(":id", id);
    return await API.get(url);
  };

  public static createBookComment = async (body: any) => {
    const url = API.URLS.BOOKS_COMMENT;
    return await API.post(url, body);
  };

  public static updateBookCommentById = async (id: string, body: any) => {
    const url = API.URLS.BOOKS_COMMENT_BY_ID.replace(":id", id);
    return await API.update(url, body);
  };

  public static deleteBookCommentById = async (id: string) => {
    const url = API.URLS.BOOKS_COMMENT_BY_ID.replace(":id", id);
    return await API.delete(url);
  };

  public static getBookmarks = async (params: QueryParams = {}) => {
    const url = API.URLS.BOOKMARK;
    return await API.get(url, params);
  };

  public static getBookmarkById = async (id: string) => {
    const url = API.URLS.BOOKMARK_BY_ID.replace(":id", id);
    return await API.get(url);
  };

  public static getBookmarkByUserId = async (id: string) => {
    const url = API.URLS.BOOKMARK_BY_USER_ID.replace(":id", id);
    return await API.get(url);
  };

  public static createBookmark = async (body: any) => {
    const url = API.URLS.BOOKMARK;
    return await API.post(url, body);
  };

  public static updateBookmarkById = async (id: string, body: any) => {
    const url = API.URLS.BOOKMARK_BY_ID.replace(":id", id);
    return await API.update(url, body);
  };

  public static deleteBookmarkById = async (id: string) => {
    const url = API.URLS.BOOKMARK_BY_ID.replace(":id", id);
    return await API.delete(url);
  };

  public static getBlogComments = async (params: QueryParams = {}) => {
    const url = API.URLS.BLOG_COMMENT;
    return await API.get(url, params);
  };

  public static getBlogCommentById = async (id: string) => {
    const url = API.URLS.BLOG_COMMENT_BY_ID.replace(":id", id);
    return await API.get(url);
  };

  public static getBlogCommentByBlogId = async (id: string) => {
    const url = API.URLS.BLOG_COMMENT_BY_BLOG_ID.replace(":id", id);
    return await API.get(url);
  };

  public static getBlogCommentByUserId = async (id: string) => {
    const url = API.URLS.BLOG_COMMENT_BY_USER_ID.replace(":id", id);
    return await API.get(url);
  };

  public static createBlogComment = async (body: any) => {
    const url = API.URLS.BLOG_COMMENT;
    return await API.post(url, body);
  };

  public static updateBlogCommentById = async (id: string, body: any) => {
    const url = API.URLS.BLOG_COMMENT_BY_ID.replace(":id", id);
    return await API.update(url, body);
  };

  public static deleteBlogCommentById = async (id: string) => {
    const url = API.URLS.BLOG_COMMENT_BY_ID.replace(":id", id);
    return await API.delete(url);
  };

  public static getBlogs = async (params: QueryParams = {}) => {
    const url = API.URLS.BLOG;
    return await API.get(url, params);
  };

  public static getBlogById = async (id: string) => {
    const url = API.URLS.BLOG_BY_ID.replace(":id", id);
    return await API.get(url);
  };

  public static getBlogsByUserId = async (id: string) => {
    const url = API.URLS.BLOGS_BY_USER_ID.replace(":id", id);
    return await API.get(url);
  };

  public static createBlog = async (body: any) => {
    const url = API.URLS.BLOG;
    return await API.post(url, body);
  };

  public static updateBlogById = async (id: string, body: any) => {
    const url = API.URLS.BLOG_BY_ID.replace(":id", id);
    return await API.update(url, body);
  };

  public static deleteBlogById = async (id: string) => {
    const url = API.URLS.BLOG_BY_ID.replace(":id", id);
    return await API.delete(url);
  };
}
