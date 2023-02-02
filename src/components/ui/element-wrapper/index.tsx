import { ReactNode } from "react";

interface ElementWrapperProps {
  children: ReactNode;
	className?: string
}

export const ElementWrapper = ({ children, className }: ElementWrapperProps) => {
  return (
    <div className={`w-full p-3 shadow rounded  ${className}`}>
			{children}
		</div>
  );
};
