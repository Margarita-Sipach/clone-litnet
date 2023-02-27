import { ReactNode } from "react";

interface ElementWrapperProps {
  children: ReactNode;
  className?: string;
}

export const ElementWrapper = ({
  children,
  className,
}: ElementWrapperProps) => {
  return (
    <div
      className={`rounded-md border border-slate-200 p-3 shadow shadow-md ${className}`}
    >
      {children}
    </div>
  );
};
