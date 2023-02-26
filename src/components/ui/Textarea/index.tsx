import React, { ChangeEvent } from "react";

interface TextareaProps {
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e?: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  required,
  value,
  onChange,
}) => {
  return (
    <textarea
      className="h-60 rounded-md border-[1px] bg-slate-100 py-2 px-4 text-slate-500 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none sm:text-sm sm:placeholder:text-sm lg:text-lg lg:placeholder:text-lg"
      placeholder={placeholder}
      value={value}
      required={!!required}
      onChange={(e?: ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) onChange(e);
      }}
    />
  );
};
