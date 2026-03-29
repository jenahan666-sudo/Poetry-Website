import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ChipProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Chip = ({ children, active = false, onClick, className = '' }: ChipProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-4 py-2
        rounded-full
        text-sm
        border
        transition-all duration-200
        ${active 
          ? 'bg-brand-accent text-white border-brand-accent' 
          : 'bg-surface-card text-text-primary border-border-default hover:border-border-strong'
        }
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};
