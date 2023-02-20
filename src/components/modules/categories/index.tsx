import { Link } from "react-router-dom";
import { useGenres } from "../../../hooks";

interface CategoriesProps {
  onClick?: () => void;
}

export const Categories = ({ onClick }: CategoriesProps) => {
  const { data: genres, isLoading } = useGenres();
  return (
    <div className="w-full">
      {genres ? (
        <>
          <div className="grid grid-cols-2 justify-between gap-x-6 sm:grid-cols-3">
            {genres.map((genre) => (
              <Link
                key={genre.id}
                to={`books/${genre.name}`}
                className="mb-3 text-sm hover:text-indigo-400 sm:text-base lg:text-lg"
                onClick={onClick}
              >
                {genre.name}
              </Link>
            ))}
          </div>
          <div className="my-1 h-[1px] w-full bg-black"></div>
          <Link
            to="/books"
            className="block w-full text-right font-bold text-indigo-400 sm:text-base lg:text-lg"
            onClick={onClick}
          >
            Посмотреть все жанры
          </Link>
        </>
      ) : isLoading ? (
        <p>loading genres...</p>
      ) : (
        <p>error loading genres</p>
      )}
    </div>
  );
};
