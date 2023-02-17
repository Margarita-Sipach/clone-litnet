import { Link } from "react-router-dom";
import { useFetchGenres } from "../../../hooks";
import { GenreType } from "../../../types/types";

// const categories = [
//   "Фэнтези",
//   "ЛитРПГ",
//   "Любовные романы",
//   "Фантастика",
//   "Исторический роман",
//   "Молодежная проза",
//   "Попаданцы",
//   "Женский роман",
//   "Фанфик",
//   "Детективы",
//   "Проза",
//   "Боевик",
//   "Триллеры",
//   "Мистика/Ужасы",
//   "Разное",
// ];

interface CategoriesProps{
	onClick?: () => void;
}

export const Categories = ({onClick}: CategoriesProps) => {
  const {genres} = useFetchGenres();
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 justify-between gap-x-6 sm:grid-cols-3">
        {genres ? genres.map((genre) => (
          <Link
            to=""
            className="mb-3 text-sm hover:text-indigo-400 sm:text-base lg:text-lg"
						onClick={onClick}
          >
            {genre.name}
          </Link>
        )): <h1>Loading...</h1>}
      </div>
      <div className="my-1 h-[1px] w-full bg-black"></div>
      <Link
        to="/all"
        className="block w-full text-right font-bold text-indigo-400 sm:text-base lg:text-lg"
				onClick={onClick}
			>
        Посмотреть все жанры
      </Link>
    </div>
  );
};
