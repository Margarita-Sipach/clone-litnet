import { ElementWrapper } from "../../ui/element-wrapper";
import { SidebarElement } from "../../ui/sidebar-element";
import { ReactNode } from "react";

interface SidebarProps {
  className?: string;
  children: ReactNode;
}

export const Sidebar = ({ className, children }: SidebarProps) => {
  return (
    <ElementWrapper
      className={`hidden sm:flex sm:flex-col sm:w-80 sm:gap-y-6 lg:w-96 mr-5 ${className}`}
    >
      {children}
    </ElementWrapper>
  );
};
