import { ReactNode } from "react";
import { Sidebar } from "../../modules/sidebar";
import { SidebarElement } from "../sidebar-element";

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
      <h1 className="text-3xl mb-9">{title}</h1>
      <div className="flex items-start gap-x-5 overflow-hidden">
        <div className="w-full flex flex-col overflow-hidden gap-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};
