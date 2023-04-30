import React, { FormEvent } from "react";

type ButtonProps = {
  children: string;
  type?: "primary" | "secondary";
  onClick?: (e: FormEvent<HTMLButtonElement>) => void;
  className?: string;
  size?: "sm" | "md";
  disabled?: boolean;
  title?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  size = "md",
  onClick,
  disabled = false,
  title = "",
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
      className={`rounded-md border-2 border-indigo-400 px-1 py-1 text-sm font-medium hover:border-indigo-500 disabled:border-indigo-800 disabled:bg-indigo-700 sm:px-3 sm:${
        size === "md" && "text-base"
      } ${conditionalStyles} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};
