import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Poem } from '../../../data/poems';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';

interface FeaturedPoemCardProps {
  poem: Poem;
}

export const FeaturedPoemCard = ({ poem }: FeaturedPoemCardProps) => {
  return (
    <Card hover className="p-8 sm:p-12">
      <Badge variant="accent" className="mb-6">
        Latest
      </Badge>
      
      <h2 className="text-4xl sm:text-5xl font-serif mb-4 text-text-primary">
        {poem.title}
      </h2>
      
      <p className="text-lg text-text-secondary leading-relaxed mb-6 max-w-2xl">
        {poem.excerpt}
      </p>
      
      <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
        <Calendar size={16} />
        <span>
          Week {poem.week} · {format(new Date(poem.date), 'd MMMM yyyy', { locale: de })}
        </span>
      </div>
      
      <Link to={`/gedicht/${poem.slug}`}>
        <Button variant="primary" className="group">
          Read more
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </Card>
  );
};