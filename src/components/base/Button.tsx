
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'navy' | 'teal' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = 'whitespace-nowrap cursor-pointer font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-200 shadow-orange hover:shadow-orange',
    secondary: 'bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-200 shadow-teal hover:shadow-teal',
    outline: 'border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white focus:ring-teal-200 bg-white hover:shadow-teal',
    navy: 'bg-navy-900 text-white hover:bg-navy-800 focus:ring-navy-200 shadow-lg hover:shadow-large',
    teal: 'bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-200 shadow-teal hover:shadow-teal',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-200 shadow-orange hover:shadow-orange'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
