import { ChangeEvent, useState } from "react";

interface PrimaryInputProps {
  options?: (string | number)[];
  defaultOption?: string | number;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Status = ({
  options = ["Active", "Inactive"],
  defaultOption,
  onChange,
}: PrimaryInputProps) => {
  const [currentValue, setCurrentValue] = useState(defaultOption);

  return (
    <select
      defaultValue={currentValue}
      className={`w-full border-spacing-1 rounded ${
        currentValue === "Active" ? "text-green-500" : "text-red-500"
      }`}
      onChange={(e) => {
        setCurrentValue(e.target.value);
      }}
    >
      {options.map((item) => (
        <option
          key={item}
          value={item}
          className={`mt-16 border border-slate-300 py-2 text-center ${
            item === "Active" ? "text-green-500" : "text-red-500"
          }`}
        >
          {item}
        </option>
      ))}
    </select>
  );
};
