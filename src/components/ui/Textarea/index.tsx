import React, { ChangeEvent } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors } from "react-hook-form/dist/types";

interface TextareaProps {
  placeholder?: string;
  required?: boolean;
  value?: string;
  properties?: any;
  name?: string;
  errors?: FieldErrors;
  onChange?: (e?: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  required,
  value,
  onChange,
  properties,
  errors,
  name,
}) => {
  return (
    <label className="h-15 flex flex-col">
      <textarea
        className="h-60 rounded-md border-[1px] bg-slate-100 px-4 py-2 text-slate-500 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none sm:text-sm sm:placeholder:text-sm lg:text-lg lg:placeholder:text-lg"
        placeholder={placeholder}
        defaultValue={value}
        required={!!required}
        onChange={(e?: ChangeEvent<HTMLTextAreaElement>) => {
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
