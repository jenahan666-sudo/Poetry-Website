import { Type, Share2, Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../layout/ThemeToggle';
import { useState } from 'react';
import { toast } from 'sonner';

interface ReadingControlsProps {
  fontSize: number;
  onFontSizeChange: (size: number) => void;
}

export const ReadingControls = ({ fontSize, onFontSizeChange }: ReadingControlsProps) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success('Link kopiert');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Fehler beim Kopieren');
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {/* Font Size Controls */}
      <div className="flex items-center gap-2 px-3 py-2 bg-surface-card border border-border-default rounded-lg">
        <Type size={16} className="text-text-muted" />
        <button
          onClick={() => onFontSizeChange(Math.max(14, fontSize - 2))}
          className="w-7 h-7 flex items-center justify-center text-text-primary hover:bg-bg-secondary rounded transition-colors"
          aria-label="Schrift verkleinern"
        >
          A-
        </button>
        <button
          onClick={() => onFontSizeChange(Math.min(24, fontSize + 2))}
          className="w-7 h-7 flex items-center justify-center text-text-primary hover:bg-bg-secondary rounded transition-colors"
          aria-label="Schrift vergrössern"
        >
          A+
        </button>
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Share Button */}
      <Button
        variant="secondary"
        size="sm"
        onClick={handleShare}
        className="gap-2"
      >
        {copied ? (
          <>
            <Check size={16} />
            Kopiert
          </>
        ) : (
          <>
            <Share2 size={16} />
            Teilen
          </>
        )}
      </Button>
    </div>
  );
};
