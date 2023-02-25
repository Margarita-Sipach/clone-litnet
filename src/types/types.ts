export interface ErrorResponse {
  message: string;
}

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
  chapters?: ChapterType[];
  comments?: BookCommentType[];
  createdAt?: string;
  ratings?: RatingType[];
  bookmarks?: BookmarkType[];
}

export type DetailedBookType = {
  user: UserType;
  ratings: RatingType[];
  chapters: ChapterType[];
} & BookType;

export interface ContestType {
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
}

export interface ContestBook {
  id: string;
  bookId: string;
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
  blogComments?: BlogCommentType[];
}

export type UserStateType = UserType | null | undefined;

export interface AccountType extends UserType {
  createdAt: string;
  updatedAt: string;
  contestId?: number | null;
  contest?: ContestType | null;
  bookmarks?: BookmarkType[];
  blogs?: BlogType[];
  ratings?: RatingType[];
  bookComments?: BookCommentType[];
  blogComments?: BlogCommentType[];
  contestComments?: ContestCommentType[];
}

export interface CommentType {
  id: string;
  userId: string;
  text: string;
  createdAt: string;
  user?: {
    id: string;
    name: string;
    image: string;
  };
}

export interface BlogCommentType extends CommentType {
  blogId: string;
}

export interface BookCommentType extends CommentType {
  bookId: string;
}

export interface ContestCommentType extends CommentType {
  contestId: string;
}

export interface ChapterType {
  id: number;
  bookId: string;
  title: string;
  number: number;
  pages?: PageType[];
}

export interface PageType {
  id: number;
  chapterId: number;
  number: number;
  text: string;
}

export interface RatingType {
  id: number;
  bookId: number;
  userId: number;
  rating: number;
}

export interface BookmarkType {
  id: number;
  bookId: number;
  userId: number;
  progressId: number;
  progress: ProgressType;
}

export interface ProgressType {
  id: number;
  chapterId: number;
  pageId: number;
}