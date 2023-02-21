import { AxiosError } from "axios";

export interface ErrorType extends AxiosError {}

export interface BookElementType {
  id?: string | number;
  img: string;
  title: string;
  author: string;
  categories: string[];
  annotation: string;
  commentAmount?: number;
  readAmount?: number;
  rating: string | number;
}

export interface ChapterType {
  title: string;
  text: string;
  bookId: string;
}

export interface BookType {
  id: number;
  title: string;
  rating: string;
  description: string;
  user: { name: string };
  img: string;
  genres: GenreType[];
  chapters: ChapterType[];
  comments?: CommentType[];
  createdAt?: string;
  ratings?: {
    rating: number;
  }[];
}

export type DetailedBookType = {
  user: UserType;
  ratings: {
    rating: number;
  }[];
  chapters: ChapterType[];
} & BookType;

export type ContestType = {
  id: string;
  title: string;
  description: string;
  prize: number | string;
  img: string;
  date: string;
  countCharacters: number;
  userId: string;
  createdAt: string;
  books: ContestBook[];
};

export type ContestBook = {
  id: string;
  bookId: string;
};

export interface BookResponseType {
  rows: BookType[];
  count: number;
}

export interface GenreType {
  id: number;
  name: string;
}

export interface UserType {
  id: number;
  email: string;
  name: string;
  autobiography: string;
  readingView: string | null;
  img: string | null;
}

export interface BlogType {
  id: string;
  userId: string;
  title: string;
  text: string;
  createdAt: string;
  blogComments?: {
    id: string;
  }[];
}

export interface BlogResponseType {
  rows: BlogType[];
  count: number;
}

export type UserStateType = UserType | null | undefined;

export interface AccountType extends UserType {
  createdAt: string;
  contestId: null;
  updatedAt: string;
  contest: null;
}

export type CommentType = {
  id: string;
  userId: string;
  text: string;
  createdAt: string;
  user?: {
    id: string;
    name: string;
    image: string;
  };
};

export type BlogCommentType = {
  blogId: string;
} & CommentType;

export type BookCommentType = {
  bookId: string;
} & CommentType;

export type ContestCommentType = {
  contestId: string;
} & CommentType;
