interface SecondaryButtonProps {
  children: string;
  onClickButton?: () => void;
  className?: string;
}

export const SecondaryButton = ({
  children,
  onClickButton,
  className,
}: SecondaryButtonProps) => {
  return (
    <button
      className={`text-indigo-400 py-1 px-3 rounded-md font-medium border-indigo-400 border-2 sm:text-sm lg:text-lg hover:text-indigo-500 hover:border-indigo-500 ${className}`}
      onClick={onClickButton}
    >
      {children}
    </button>
  );
};
