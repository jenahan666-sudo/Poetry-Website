import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  onClear?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, onClear, className = '', ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={`
            w-full 
            px-4 py-2.5 
            ${icon ? 'pl-10' : ''}
            ${onClear && props.value ? 'pr-10' : ''}
            bg-surface-card 
            border border-border-default 
            rounded-lg 
            text-text-primary 
            placeholder:text-text-muted
            focus:outline-none 
            focus:ring-2 
            focus:ring-state-focus 
            focus:border-transparent
            transition-all duration-200
            ${className}
          `}
          {...props}
        />
        {onClear && props.value && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
