import React from "react";
import { IconType } from "react-icons/lib";

type IconProps = {
  icon: IconType;
  className?: string;
};

const DetailsIcon: React.FC<IconProps> = ({ icon: Icon, className = "" }) => {
  return <Icon className={`grow-1 mr-1 shrink-0 lg:mr-3 ${className}`} />;
};

export default DetailsIcon;
