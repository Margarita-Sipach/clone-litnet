import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={`max-w-[320px] px-2 w-full sm:px-4 sm:max-w-[670px] lg:max-w-[1050px] ${className}`}
    >
      {children}
    </div>
  );
};
