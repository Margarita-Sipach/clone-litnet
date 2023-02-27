import { Link } from "react-router-dom";
import useGenres from "../../api/useGenres";
import Spinner from "../../../../ui/Spinner";

interface CategoriesProps {
  onClick?: () => void;
}

const Categories = ({ onClick }: CategoriesProps) => {
  const { data: genres, isLoading } = useGenres();
  return (
    <div>
      {genres ? (
        <>
          <div className="flex flex-col items-center gap-6">
            {genres.map((genre) => (
              <Link
                key={genre.id}
                to={`books/genre/${genre.name}`}
                className="text-sm hover:text-indigo-400 sm:text-base lg:text-lg"
                onClick={onClick}
              >
                {genre.name}
              </Link>
            ))}
            <Link
              to="/books/genre/all"
              className="flex justify-center font-medium text-indigo-400 sm:text-base lg:text-lg"
              onClick={onClick}
            >
              Все книги
            </Link>
          </div>
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
