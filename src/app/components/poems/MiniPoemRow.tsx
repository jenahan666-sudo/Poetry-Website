import { Link } from 'react-router-dom';
import { Poem } from '../../../data/poems';

interface MiniPoemRowProps {
  poem: Poem;
}

export const MiniPoemRow = ({ poem }: MiniPoemRowProps) => {
  return (
    <Link 
      to={`/gedicht/${poem.slug}`}
      className="block p-4 rounded-lg border border-border-default hover:border-border-strong hover:bg-bg-secondary transition-all"
    >
      <h4 className="font-serif text-base mb-1 text-text-primary">
        {poem.title}
      </h4>
      <p className="text-xs text-text-muted">
        {poem.tags.slice(0, 2).join(', ')}
      </p>
    </Link>
  );
};