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

export type CommentType = {
  image: string;
  name: string;
  date: string;
  content: string;
};
