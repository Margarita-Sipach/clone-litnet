import React, { FormEvent } from "react";

type ButtonProps = {
  children: string;
  type?: "primary" | "secondary";
  onClick?: (e: FormEvent<HTMLButtonElement>) => void;
  className?: string;
  size?: "sm" | "md";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  size = "md",
  onClick,
  className = "",
}) => {
  const conditionalStyles =
    type === "primary"
      ? "text-white bg-indigo-400 hover:bg-indigo-500"
      : type === "secondary"
      ? "text-indigo-400 hover:text-indigo-500"
      : "";

  const handleClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) onClick(e);
  };

  return (
    <button
      className={`rounded-md border-2 border-indigo-400 py-1 px-1 text-sm font-medium hover:border-indigo-500 sm:px-3 sm:${
        size === "md" && "text-base"
      } ${conditionalStyles} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
