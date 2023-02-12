export interface TestInterface {}

export interface BookElementType {
  img: string;
  title: string;
  author: string;
  categories: string[];
  annotation: string;
  commentAmount: number;
  readAmount: number;
  rating: number;
}

export type CommentProps = {
  image: string;
  name: string;
  date: string;
  content: string;
};

export interface UserType {
  id: number;
  name: string;
  description: string;
  readingView: string | null;
  img: string | null;
}
