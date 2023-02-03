const categories = [
  "Фэнтези",
  "ЛитРПГ",
  "Любовные романы",
  "Фантастика",
  "Исторический роман",
  "Молодежная проза",
  "Попаданцы",
  "Женский роман",
  "Фанфик",
  "Детективы",
  "Проза",
  "Боевик",
  "Триллеры",
  "Мистика/Ужасы",
  "Разное",
];

export const Categories = () => {
  return (
		<div>
			<div className="grid grid-cols-2 gap-x-6 justify-between sm:grid-cols-3">
				{categories.map((item) => (
					<a href="" className="text-sm mb-3 hover:text-indigo-400 sm:text-base lg:text-lg">{item}</a>
				))}
			</div>
			<div className="w-full h-[1px] bg-black my-1"></div>
			<a href="" className="block text-indigo-400 font-bold text-right w-full sm:text-base lg:text-lg">Посмотреть все жанры</a>
		</div>
  );
};
