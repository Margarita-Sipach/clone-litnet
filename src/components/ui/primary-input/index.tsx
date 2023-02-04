import { ChangeEvent } from "react";
import "./input.css";

interface PrimaryInputProps {
  attributes?: {
    type?: string;
    placeholder?: string;
    required?: boolean;
  };
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
}

export const PrimaryInput = ({ attributes, onChange }: PrimaryInputProps) => {
  return (
    <input
      className="bg-slate-100 py-2 px-4 sm:text-sm lg:text-lg sm:placeholder:text-sm lg:placeholder:text-lg text-slate-500 rounded-md border-[1px] placeholder:text-slate-500 focus:outline-none focus:border-indigo-400"
      {...attributes}
      onChange={(e?: ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e);
      }}
    />
  );
};
