import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
}

export const Badge = ({ children, variant = 'default', className = '' }: BadgeProps) => {
  const variantClasses = {
    default: 'bg-bg-secondary text-text-secondary',
    accent: 'bg-brand-accent text-accent-foreground'
  };
  
  return (
    <span className={`
      inline-flex items-center
      px-3 py-1
      rounded-full
      text-xs
      font-medium
      ${variantClasses[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
};