import { GrClose } from "react-icons/gr";

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
}

export const CloseButton = ({ onClick, className }: CloseButtonProps) => {
  return (
    <button className={`absolute right-3 top-3 ${className}`} onClick={onClick}>
      <GrClose className="" />
    </button>
  );
};
