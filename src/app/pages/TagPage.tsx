import { useParams, Navigate } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { PoemCard } from '../components/poems/PoemCard';
import { tags, getPoemsByTag } from '../../data/poems';

export const TagPage = () => {
  const { tagName } = useParams<{ tagName: string }>();
  
  if (!tagName) {
    return <Navigate to="/archiv" />;
  }

  const tag = tags.find(t => t.name.toLowerCase() === tagName.toLowerCase());
  
  if (!tag) {
    return <Navigate to="/archiv" />;
  }

  const tagPoems = getPoemsByTag(tag.name);

  return (
    <div className="min-h-screen">
      <Container>
        {/* Header */}
        <section className="py-8 sm:py-12">
          <h1 className="text-4xl sm:text-5xl font-serif mb-4 text-text-primary">
            Topic: {tag.name}
          </h1>
          <p className="text-lg text-text-secondary mb-2">
            {tag.count} {tag.count === 1 ? 'text' : 'texts'}
          </p>
          {tag.description && (
            <p className="text-base text-text-secondary max-w-2xl">
              {tag.description}
            </p>
          )}
        </section>

        {/* Poems */}
        <section className="pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tagPoems.map(poem => (
              <PoemCard key={poem.id} poem={poem} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};