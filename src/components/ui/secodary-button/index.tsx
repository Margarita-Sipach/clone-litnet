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
      className={`rounded-md border-2 border-indigo-400  py-1 px-1 font-medium text-indigo-400 hover:border-indigo-500 hover:text-indigo-500 sm:px-3 sm:text-sm lg:text-lg ${className}`}
      onClick={onClickButton}
    >
      {children}
    </button>
  );
};
