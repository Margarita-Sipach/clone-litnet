interface PrimaryInputProps {
  title: string;
  options: (string | number)[];
}

export const PrimarySelect = ({ title, options }: PrimaryInputProps) => {
  return (
    <select className="w-full border-spacing-1 rounded border border-gray-400 py-2 px-3">
      <option value={title} selected disabled>
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
