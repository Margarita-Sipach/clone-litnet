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

export interface BookType {
  id: number;
  title: string;
  rating: string;
  description: string;
  user: { name: string };
  img: string;
  genres: GenreType[];
}

export type DetailedBookType = {
  id: number;
  title: string;
  rating: string;
  description: string;
  img: string;
  userId: string;
  createdAt: string;
  genres: GenreType[];
  comments: BookCommentType[];
  user: UserType;
  ratings: {
    rating: number;
  }[];
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
