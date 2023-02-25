import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageWrapperProps {
  title?: string;
  children: ReactNode;
  className?: string;
  isTop?: boolean;
}

export const PageWrapper = ({
  title,
  children,
  className,
  isTop,
}: PageWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className={`${isTop ? "mt-28" : "mt-0"} w-full ${className}`}
    >
      <h1 className="mb-9 text-3xl">{title}</h1>
      <div className="flex items-start gap-x-5 overflow-hidden">
        <div className="flex w-full flex-col gap-y-6 overflow-hidden">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
