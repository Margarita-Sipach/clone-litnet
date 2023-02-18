import { ChangeEvent } from "react";

interface PrimaryInputProps {
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  invalid?: boolean;
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
}

export const PrimaryInput = ({
  type,
  placeholder,
  required,
  value,
  invalid,
  onChange,
}: PrimaryInputProps) => {
  return (
    <input
      className={`rounded-md border-[1px] bg-slate-100 py-2 px-4 text-slate-500 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none sm:text-sm sm:placeholder:text-sm lg:text-lg lg:placeholder:text-lg ${
        invalid && "border-red-600"
      }`}
      required={!!required}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e?: ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e);
      }}
    />
  );
};
