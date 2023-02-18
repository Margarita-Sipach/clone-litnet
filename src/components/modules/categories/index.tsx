import { Link } from "react-router-dom";
import { useGenres } from "../../../hooks";

interface CategoriesProps {
  onClick?: () => void;
}

export const Categories = ({ onClick }: CategoriesProps) => {
  const genresQuery = useGenres();
  return (
    <div className="w-full">
      {genresQuery.isSuccess ? (
        <>
          <div className="grid grid-cols-2 justify-between gap-x-6 sm:grid-cols-3">
            {genresQuery.data.map((genre) => (
              <Link
                key={genre.id}
                to=""
                className="mb-3 text-sm hover:text-indigo-400 sm:text-base lg:text-lg"
                onClick={onClick}
              >
                {genre.name}
              </Link>
            ))}
          </div>
          <div className="my-1 h-[1px] w-full bg-black"></div>
          <Link
            to="/all"
            className="block w-full text-right font-bold text-indigo-400 sm:text-base lg:text-lg"
            onClick={onClick}
          >
            Посмотреть все жанры
          </Link>{" "}
        </>
      ) : (
        <p>loading genres...</p>
      )}
    </div>
  );
};
