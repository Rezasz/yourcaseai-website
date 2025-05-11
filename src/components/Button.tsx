import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  href?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  primary = false, 
  href, 
  fullWidth = false,
  onClick
}) => {
  const baseClasses = "inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const primaryClasses = "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";
  const secondaryClasses = "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500";
  
  const widthClasses = fullWidth ? "w-full" : "";
  
  const classes = `${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${widthClasses}`;
  
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;