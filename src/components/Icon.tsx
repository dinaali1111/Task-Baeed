import React from 'react';
import type { IconName } from '../assets/iconConstants';

interface IconProps {
  name: IconName | string;
  alt?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
}

const Icon: React.FC<IconProps> = ({
  name,
  alt = "",
  className = "",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
    "2xl": "h-24 w-24",
    "3xl": "h-32 w-36",
    "4xl": "h-40 w-40",
    "5xl": "h-46 w-42",
  };

  return (
    <img
      src={`/src/assets/Icons/${name}`}
      alt={alt}
      className={`${sizeClasses[size]} object-contain ${className}`}
    />
  );
};

export default Icon;