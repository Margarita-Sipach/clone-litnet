import { ChangeEvent, useState } from "react";

interface PrimaryInputProps {
  attributes?: {
    type?: string;
    placeholder?: string;
    required?: boolean;
    initialValue?: string;
  };
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
}

export const PrimaryInput = ({ attributes, onChange }: PrimaryInputProps) => {
  const [value, setValue] = useState(attributes?.initialValue || "");
  return (
    <input
      className="rounded-md border-[1px] bg-slate-100 py-2 px-4 text-slate-500 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none sm:text-sm sm:placeholder:text-sm lg:text-lg lg:placeholder:text-lg"
      {...attributes}
      onChange={(e?: ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e);
        setValue(e?.target.value || "");
      }}
      value={value}
    />
  );
};
