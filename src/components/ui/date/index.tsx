interface DateProps {
  date: string;
  className?: string;
}

export const Date = ({ date, className }: DateProps) => {
  return <div className={`text-xs text-slate-400 ${className}`}>{date}</div>;
};
