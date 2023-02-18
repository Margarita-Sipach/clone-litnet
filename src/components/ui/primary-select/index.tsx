import React, { ChangeEvent } from "react";

interface PrimaryInputProps {
  title: string;
  options: (string | number)[];
  defaultOption?: string | number;
  onChange?: (e?: ChangeEvent<HTMLSelectElement>) => void;
}

export const PrimarySelect = ({
  title,
  options,
  defaultOption,
  onChange,
}: PrimaryInputProps) => {
  return (
    <select
      onChange={(e?: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) onChange(e);
      }}
      defaultValue={defaultOption || title}
      className="w-full border-spacing-1 rounded border border-gray-400 py-2 px-3"
    >
      <option value={title} disabled>
        {title}
      </option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
