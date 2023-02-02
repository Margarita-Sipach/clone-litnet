import { ReactNode } from "react";
import { Wrapper } from "../wrapper";

interface PageWrapperProps {
  title?: string;
  children: ReactNode;
  className?: string;
  isTop?: boolean;
}

export const PageWrapper = ({
  title,
  children,
  className,
  isTop,
}: PageWrapperProps) => {
  return (
    <Wrapper className={`${isTop ? "mt-28" : "mt-0"} w-full ${className}`}>
      <h1 className="text-3xl mb-9">{title}</h1>
      <div className="flex flex-col justify-between items-center gap-y-6">
        {children}
      </div>
    </Wrapper>
  );
};
