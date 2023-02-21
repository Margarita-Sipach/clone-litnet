import { ElementWrapper } from "../../ui/element-wrapper";
import { ReactNode } from "react";

interface SidebarProps {
  className?: string;
  children: ReactNode;
}

export const Sidebar = ({ className, children }: SidebarProps) => {
  return (
    <ElementWrapper
      className={`self-start ml-5 hidden max-h-full md:flex sm:hidden md:w-60 md:flex-col md:gap-y-6 lg:flex lg:w-full ${className}`}
    >
      <h2 className=" text-xl">Литнет рекомендует</h2>
      {children}
    </ElementWrapper>
  );
};
