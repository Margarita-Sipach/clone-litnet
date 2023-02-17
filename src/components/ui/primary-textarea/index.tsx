import { ChangeEvent, useState } from "react";

interface PrimaryTextareaProps {
  attributes?: {
    placeholder?: string;
    required?: boolean;
    initialValue?: string;
  };
  onChange?: (e?: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const PrimaryTextarea = ({
  attributes,
  onChange,
}: PrimaryTextareaProps) => {
  const [value, setValue] = useState(attributes?.initialValue || "");
  return (
    <textarea
      className="h-60 rounded-md border-[1px] bg-slate-100 py-2 px-4 text-slate-500 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none sm:text-sm sm:placeholder:text-sm lg:text-lg lg:placeholder:text-lg"
      {...attributes}
      onChange={(e?: ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) onChange(e);
        setValue(e?.target.value || "");
      }}
      value={value}
    />
  );
};
