import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={`max-w-md px-2 w-full sm:px-4 sm:max-w-2xl lg:max-w-6xl ${className}`}
    >
      {children}
    </div>
  );
};
