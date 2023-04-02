import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={`w-full max-w-[320px] px-2 sm:max-w-[670px] sm:px-4 lg:max-w-[1050px] ${className}`}
    >
      {children}
    </div>
  );
};
