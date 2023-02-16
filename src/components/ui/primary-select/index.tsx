interface PrimaryInputProps {
  title: string;
  options: (string | number)[];
  defaultOption?: string | number;
}

export const PrimarySelect = ({
  title,
  options,
  defaultOption,
}: PrimaryInputProps) => {
  return (
    <select
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
