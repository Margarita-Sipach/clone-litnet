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
      className={`bg-indigo-400 py-1 px-3 text-white rounded-md border-2 border-indigo-400 font-medium sm:text-sm lg:text-lg hover:bg-indigo-500 hover:border-indigo-500 ${className}`}
      onClick={onClickButton}
    >
      {children}
    </button>
  );
};
