import React, { FormEvent } from "react";

type ButtonProps = {
  children: string;
  type?: "primary" | "secondary";
  onSubmit?: (e: FormEvent<HTMLButtonElement>) => void;
  className?: string;
};

const FormButton: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  onSubmit,
  className = "",
}) => {
  const conditionalStyles =
    type === "primary"
      ? "text-white bg-indigo-400 hover:bg-indigo-500"
      : type === "secondary"
      ? "text-indigo-400 hover:text-indigo-500"
      : "";

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  return (
    <button
      type="submit"
      className={`rounded-md border-2 border-indigo-400 py-1 px-3 text-sm font-medium hover:border-indigo-500 ${conditionalStyles} ${className}`}
      onClick={handleSubmit}
    >
      {children}
    </button>
  );
};

export default FormButton;
