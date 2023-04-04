import { ErrorMessage } from "@hookform/error-message";
import { ChangeEvent } from "react";
import { FieldErrors } from "react-hook-form";

interface PrimarySelectProps {
  title: string;
  options: (string | number)[];
  defaultOption?: string | number;
  properties?: any;
  name?: string;
  errors?: FieldErrors;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const PrimarySelect = ({
  title,
  options,
  defaultOption,
  onChange,
  properties,
  name,
  errors,
}: PrimarySelectProps) => {
  return (
    <label className="h-15 flex flex-col">
      <select
        defaultValue={defaultOption || title}
        className="w-full border-spacing-1 rounded border border-gray-400 px-3 py-2"
        {...properties}
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
      <div className="ml-2 text-sm font-semibold text-red-500">
        <ErrorMessage errors={errors} name={`${name}`} />
      </div>
    </label>
  );
};
