interface PrimaryButtonProps {
  children: string;
  onClickButton?: () => void;
  className?: string;
}

export const PrimaryButton = ({
  children,
  onClickButton,
  className,
}: PrimaryButtonProps) => {
  return (
    <button
      className={`rounded-md border-2 border-indigo-400 bg-indigo-400 px-1 py-1 font-medium text-white hover:border-indigo-500 hover:bg-indigo-500 sm:px-3 sm:text-sm lg:text-lg ${className}`}
      onClick={onClickButton}
    >
      {children}
    </button>
  );
};
