import { SelectHTMLAttributes, forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, className = '', ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={`
            w-full 
            appearance-none
            px-4 py-2.5 pr-10
            bg-surface-card 
            border border-border-default 
            rounded-lg 
            text-text-primary
            focus:outline-none 
            focus:ring-2 
            focus:ring-state-focus 
            focus:border-transparent
            transition-all duration-200
            cursor-pointer
            ${className}
          `}
          {...props}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
          <ChevronDown size={16} />
        </div>
      </div>
    );
  }
);

Select.displayName = 'Select';
