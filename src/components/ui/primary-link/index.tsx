import { Link } from "react-router-dom";

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
      className={`rounded-md border-2 border-indigo-400 bg-indigo-400 py-1 px-3 text-sm font-medium text-white hover:border-indigo-500 hover:bg-indigo-500 ${className}`}
      to={path}
    >
      {children}
    </Link>
  );
};
