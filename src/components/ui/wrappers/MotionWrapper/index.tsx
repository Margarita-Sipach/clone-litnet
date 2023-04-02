import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.15 }}
    className={className}
  >
    {children}
  </motion.div>
);
