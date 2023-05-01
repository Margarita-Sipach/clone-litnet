interface SelectListProps {
  title: string;
  options: (string | number)[];
  defaultOption?: string | number;
  className?: string;
}

export const SelectList = ({
  title,
  options,
  defaultOption,
  className = "",
}: SelectListProps) => {
  return (
    <select
      value={defaultOption || title}
      className={` ${className} w-full border-spacing-1 rounded border border-gray-400 px-3 py-2`}
      onChange={() => {}}
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
