import { ElementWrapper } from "../../ui/ElementWrapper";
import { ReactNode } from "react";

interface SidebarProps {
  className?: string;
  children: ReactNode;
}

export const Sidebar = ({ className, children }: SidebarProps) => {
  return (
    <ElementWrapper
      className={`ml-5 hidden max-h-full self-start sm:hidden md:flex md:w-60 md:flex-col md:gap-y-6 lg:flex lg:w-full ${className}`}
    >
      <h2 className=" text-xl">Литнет рекомендует</h2>
      {children}
    </ElementWrapper>
  );
};
