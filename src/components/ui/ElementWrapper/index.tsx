import { ReactNode } from "react";

interface ElementWrapperProps {
  children: ReactNode;
  className?: string;
}

export const ElementWrapper = ({
  children,
  className,
}: ElementWrapperProps) => {
  return <div className={`rounded p-3 shadow ${className}`}>{children}</div>;
};
