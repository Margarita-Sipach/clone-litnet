import { ErrorMessage } from "@hookform/error-message";
import React, { ChangeEvent } from "react";
import { FieldErrors } from "react-hook-form";

interface InputProps {
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  invalid?: boolean;
  properties?: any;
  name?: string;
  errors?: FieldErrors;
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  required,
  value,
  invalid,
  onChange,
  properties,
  name,
  errors,
}) => {
  return (
    <label className="flex h-15 flex-col">
      <input
        className={`rounded-md border-[1px] bg-slate-100 px-4 py-2 text-slate-500 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none sm:text-sm sm:placeholder:text-sm lg:text-lg lg:placeholder:text-lg `}
        required={!!required}
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        onChange={(e?: ChangeEvent<HTMLInputElement>) => {
          if (onChange) onChange(e);
        }}
        {...properties}
      />
      <div className="ml-2 text-sm font-semibold text-red-500">
        <ErrorMessage errors={errors} name={`${name}`} />
      </div>
    </label>
  );
};
