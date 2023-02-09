import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface IconProps {
  icon: ReactNode;
  title: string | number;
}

export const Icon = ({ icon, title }: IconProps) => {
  return (
    <span className="flex items-center gap-x-1">
      <span className="text-indigo-400">{icon}</span>
      <span className="text-base">{title}</span>
    </span>
  );
};
