import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { MotionWrapper } from "../MotionWrapper";

type SpinnerProps = {
  className?: string;
};

export const Spinner: React.FC<SpinnerProps> = ({ className = "" }) => {
  return (
    <MotionWrapper className={`overflow-hidden ${className}`}>
      <BiLoaderAlt className="flex-1 animate-spin" size="30px" />
    </MotionWrapper>
  );
};
