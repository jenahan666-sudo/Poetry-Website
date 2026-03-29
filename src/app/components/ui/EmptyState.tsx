import { FileQuestion } from 'lucide-react';
import { Button } from './Button';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState = ({ 
  title = 'Nothing found',
  description = 'Try different search terms or filters.',
  actionLabel = 'Reset filters',
  onAction
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-bg-secondary flex items-center justify-center mb-4">
        <FileQuestion size={32} className="text-text-muted" />
      </div>
      <h3 className="text-xl font-serif mb-2 text-text-primary">
        {title}
      </h3>
      <p className="text-text-secondary mb-6 max-w-md">
        {description}
      </p>
      {onAction && (
        <Button variant="secondary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};