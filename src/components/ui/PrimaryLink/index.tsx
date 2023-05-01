import { Link } from "react-router-dom";
import React from "react";

interface PrimaryLinkProps {
  children: string;
  className: string;
  path: string;
}

export const PrimaryLink: React.FC<PrimaryLinkProps> = ({
  children,
  className = "",
  path,
}) => {
  return (
    <Link
      className={`${className} rounded-md border-2 border-indigo-400 bg-indigo-400 px-3 py-1 font-medium text-white hover:border-indigo-500 hover:bg-indigo-500`}
      to={path}
    >
      {children}
    </Link>
  );
};
