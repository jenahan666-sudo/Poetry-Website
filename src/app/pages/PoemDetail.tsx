import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Chip } from '../components/ui/Chip';
import { ReadingControls } from '../components/poems/ReadingControls';
import { MiniPoemRow } from '../components/poems/MiniPoemRow';
import { getPoem, getRelatedPoems, getNextPoem, getPreviousPoem } from '../../data/poems';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';

export const PoemDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [fontSize, setFontSize] = useState(18);

  if (!slug) {
    return <Navigate to="/" />;
  }

  const poem = getPoem(slug);

  if (!poem) {
    return <Navigate to="/404" />;
  }

  const relatedPoems = getRelatedPoems(poem.id, 3);
  const nextPoem = getNextPoem(slug);
  const previousPoem = getPreviousPoem(slug);

  return (
    <div className="min-h-screen">
      <Container>
        <div className="py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li>
                <Link to="/archiv" className="hover:text-brand-accent transition-colors">
                  Archive
                </Link>
              </li>
              <li>/</li>
              <li className="text-text-primary truncate">{poem.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl font-serif mb-6 text-text-primary">
                  {poem.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-text-muted mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    Week {poem.week} · {format(new Date(poem.date), 'd MMMM yyyy', { locale: de })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={16} />
                    {poem.readingTime} min read
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {poem.tags.map(tag => (
                    <Link key={tag} to={`/thema/${tag.toLowerCase()}`}>
                      <Chip>{tag}</Chip>
                    </Link>
                  ))}
                </div>

                {/* Reading Controls */}
                <ReadingControls fontSize={fontSize} onFontSizeChange={setFontSize} />
              </div>

              {/* Poem Text */}
              <div className="mb-12">
                <div
                  className="font-serif text-text-primary leading-loose max-w-2xl"
                  style={{ fontSize: `${fontSize}px`, lineHeight: '1.8' }}
                >
                  {poem.body.split('\n').map((line, index) => (
                    <p key={index} className={line.trim() === '' ? 'h-6' : ''}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border-default">
                {previousPoem ? (
                  <Link to={`/gedicht/${previousPoem.slug}`} className="flex-1">
                    <Button variant="secondary" className="w-full justify-start group">
                      <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                      <span className="truncate">Previous: {previousPoem.title}</span>
                    </Button>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}

                {nextPoem ? (
                  <Link to={`/gedicht/${nextPoem.slug}`} className="flex-1">
                    <Button variant="secondary" className="w-full justify-end group">
                      <span className="truncate text-left flex-1 mr-2">Next: {nextPoem.title}</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <h3 className="text-xl font-serif mb-4 text-text-primary">
                  Related
                </h3>
                <div className="space-y-3">
                  {relatedPoems.map(relatedPoem => (
                    <MiniPoemRow key={relatedPoem.id} poem={relatedPoem} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};