import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoReload } from "react-icons/io5";
import Button from "../button";

type ContestsBookProps = {
  title: string;
  author: string;
  img: string;
  favorites: number;
  pages: number;
  genres: string[];
};

const ContestsBook: React.FC<ContestsBookProps> = ({
  title,
  author,
  img,
  favorites,
  pages,
  genres,
}) => {
  const genresString = genres.join(",");
  return (
    <div className="flex gap-4 border p-4">
      <img className="aspect-[2/3] w-[100px]" src={img} alt="book image" />
      <div className="flex flex-col">
        <p className="font-medium">{title}</p>
        <p className="mb-2 text-xs text-gray-500">{author}</p>
        <div className="mb-2 flex gap-4">
          <div className="flex items-center gap-1">
            <AiFillStar />
            <p className="text-xs">{favorites}</p>
          </div>
          <div className="flex items-center gap-1">
            <IoReload size="14px" />
            <p className="text-xs">{pages}</p>
          </div>
        </div>
        <p className="text-xs text-gray-600">
          <span className="font-medium">В тексте есть: </span>
          {genresString}
        </p>
        <Button className="mt-auto self-start">Читать</Button>
      </div>
    </div>
  );
};

export default ContestsBook;
