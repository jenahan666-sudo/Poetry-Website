import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-state-focus focus:ring-offset-2';
    
    const variantClasses = {
      primary: 'bg-brand-accent text-accent-foreground hover:bg-brand-accent-hover border border-brand-accent',
      secondary: 'bg-surface-card text-text-primary hover:bg-bg-secondary border border-border-default hover:border-border-strong',
      ghost: 'bg-transparent text-text-primary hover:bg-bg-secondary border border-transparent hover:border-border-default',
      icon: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-secondary border border-transparent'
    };
    
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm rounded-lg',
      md: 'px-4 py-2.5 text-base rounded-[10px]',
      lg: 'px-6 py-3 text-base rounded-[10px]'
    };
    
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';