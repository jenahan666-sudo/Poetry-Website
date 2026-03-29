import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { Card } from '../ui/Card';
import { Chip } from '../ui/Chip';
import { Poem } from '../../../data/poems';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';

interface PoemCardProps {
  poem: Poem;
}

export const PoemCard = ({ poem }: PoemCardProps) => {
  return (
    <Link to={`/gedicht/${poem.slug}`}>
      <Card hover className="p-6 h-full flex flex-col">
        <h3 className="text-2xl font-serif mb-3 text-text-primary">
          {poem.title}
        </h3>
        
        <p className="text-text-secondary leading-relaxed mb-4 line-clamp-3 flex-1 whitespace-pre-line">
          {poem.excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {format(new Date(poem.date), 'd. MMM yyyy', { locale: de })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {poem.readingTime} Min.
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {poem.tags.slice(0, 3).map(tag => (
            <Chip key={tag} className="text-xs">
              {tag}
            </Chip>
          ))}
        </div>
      </Card>
    </Link>
  );
};