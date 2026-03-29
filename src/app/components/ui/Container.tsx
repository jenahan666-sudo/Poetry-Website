import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`w-full max-w-[1120px] mx-auto px-4 sm:px-8 ${className}`}>
      {children}
    </div>
  );
};
