import { Link } from "react-router-dom";
import useGenres from "../../api/useGenres";
import Spinner from "../../../../ui/Spinner";

interface CategoriesProps {
  onClick?: () => void;
}

const Categories = ({ onClick }: CategoriesProps) => {
  const { data: genres, isLoading } = useGenres();
  return (
    <div className="w-full">
      {genres ? (
        <>
          <div className="grid grid-cols-2 justify-between gap-x-6 sm:grid-cols-3">
            {genres.map((genre) => (
              <Link
                key={genre.id}
                to={`books/genre/${genre.name}`}
                className="mb-3 text-sm hover:text-indigo-400 sm:text-base lg:text-lg"
                onClick={onClick}
              >
                {genre.name}
              </Link>
            ))}
          </div>
          <div className="my-1 h-[1px] w-full bg-black"></div>
          <Link
            to="/books/genre/all"
            className="block w-full text-right font-bold text-indigo-400 sm:text-base lg:text-lg"
            onClick={onClick}
          >
            Все книги
          </Link>
        </>
      ) : isLoading ? (
        <Spinner className="flex w-full justify-center" />
      ) : (
        <p>error loading genres</p>
      )}
    </div>
  );
};

export default Categories;
