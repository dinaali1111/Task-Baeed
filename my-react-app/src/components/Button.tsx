import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  style = {}
}) => {
  const baseClasses = "font-semibold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl";
  const variantClasses = {
    primary: "bg-brand-purple hover:bg-purple-700 text-white",
    secondary: "bg-brand-blue hover:bg-blue-600 text-white"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;