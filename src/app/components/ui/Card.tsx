import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card = ({ children, className = '', hover = false, onClick }: CardProps) => {
  const Component = hover ? motion.div : 'div';
  
  return (
    <Component
      onClick={onClick}
      whileHover={hover ? { y: -2 } : undefined}
      className={`
        bg-surface-card 
        border border-border-default 
        rounded-[14px] 
        transition-all duration-200
        ${hover ? 'hover:border-border-strong hover:shadow-[0_4px_6px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.04)] cursor-pointer' : 'shadow-[0_1px_3px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.03)]'}
        ${className}
      `}
    >
      {children}
    </Component>
  );
};
