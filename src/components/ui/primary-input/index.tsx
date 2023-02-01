interface PrimaryInputProps {
  placeholder: string;
}

export const PrimaryInput = ({ placeholder }: PrimaryInputProps) => {
  return (
    <input
      className="bg-slate-100 py-2 px-4 text-slate-500 rounded-md border-[1px] placeholder:text-slate-500 focus:outline-none focus:border-indigo-400"
      placeholder={placeholder}
    />
  );
};
