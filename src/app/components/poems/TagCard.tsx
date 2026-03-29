import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Tag } from '../../../data/poems';

interface TagCardProps {
  tag: Tag;
}

export const TagCard = ({ tag }: TagCardProps) => {
  return (
    <Link to={`/thema/${tag.name.toLowerCase()}`}>
      <Card hover className="p-6 text-center">
        <h3 className="text-xl font-serif mb-2 text-text-primary">
          {tag.name}
        </h3>
        <p className="text-sm text-text-muted">
          {tag.count} {tag.count === 1 ? 'Gedicht' : 'Gedichte'}
        </p>
      </Card>
    </Link>
  );
};