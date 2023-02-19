export interface TestInterface {}

export interface BookElementType {
  img: string;
  title: string;
  author: string;
  categories: string[];
  annotation: string;
  commentAmount?: number;
  readAmount?: number;
  rating: string | number;
}

export type CommentProps = {
  image: string;
  name: string;
  date: string;
  content: string;
};

export interface BookCommentType {
  userId: number,
  bookId: number,
  text: string;
}

export interface BookType {
  id: number;
  title: string;
  rating: string;
  description: string;
  user: { name: string };
  img: string;
  genres: GenreType[];
  comments: BookCommentType[];
  bookmarks: []
}

export interface BookResponseType {
  rows: BookType[];
  count: number;
}

export interface GenreType {
  id: number;
  name: string;
}

export interface GenreResponseType {
  rows: GenreType[];
  count: number;
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
  title: string;
  text: string;
  createdAt: string;
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
  // books: [];
  // bookmarks: [];
  // comments: [];
}

export type CommentType = {
  image: string;
  name: string;
  date: string;
  content: string;
};
