import { ReactNode } from "react";
import { Sidebar } from "../../modules/Sidebar";
import { SidebarElement } from "../SidebarElement";

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
    <div className={`${isTop ? "mt-28" : "mt-0"} w-full ${className}`}>
      <h1 className="mb-9 text-3xl">{title}</h1>
      <div className="flex items-start gap-x-5 overflow-hidden">
        <div className="flex w-full flex-col gap-y-6 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};
