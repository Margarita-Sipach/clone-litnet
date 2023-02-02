import { ReactNode } from "react";
import { Wrapper } from "../wrapper";

interface PageWrapperProps {
  title: string, 
	children: ReactNode,
	className: string
}

export const PageWrapper = ({ title, children, className }: PageWrapperProps) => {
  return (
    <Wrapper className={`mt-20 w-full ${className}`}>
			<h1 className="text-3xl">{title}</h1>
			{children}
		</Wrapper>
  );
};
