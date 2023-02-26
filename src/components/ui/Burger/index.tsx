interface BurgerProps {
  onClick: () => void;
}

export const Burger = ({ onClick }: BurgerProps) => {
  return (
    <div
      className="w-5 h-4 flex flex-col justify-between sm:hidden"
      onClick={onClick}
    >
      {new Array(3).fill("").map((item, index) => (
        <span key={index} className="block w-full h-[2px] bg-indigo-400"></span>
      ))}
    </div>
  );
};
