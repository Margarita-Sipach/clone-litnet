import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  slug: string;
};

const BookPage = () => {
  let { slug } = useParams<Params>();
  return <div>Book {slug} info</div>;
};

export default BookPage;
