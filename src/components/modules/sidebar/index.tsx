import { ElementWrapper } from "../../ui/element-wrapper";
import { ReactNode } from "react";

interface SidebarProps {
  className?: string;
  children: ReactNode;
}

export const Sidebar = ({ className, children }: SidebarProps) => {
  return (
    <ElementWrapper
      className={`hidden md:flex md:flex-col md:w-60 md:gap-y-6 lg:w-96 ml-5 ${className}`}
    >
      {children}
    </ElementWrapper>
  );
};
