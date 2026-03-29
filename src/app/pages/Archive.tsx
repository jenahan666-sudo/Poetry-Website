import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Chip } from '../components/ui/Chip';
import { PoemCard } from '../components/poems/PoemCard';
import { EmptyState } from '../components/ui/EmptyState';
import { poems, tags } from '../../data/poems';

export const Archive = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredPoems = useMemo(() => {
    let filtered = [...poems];

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(poem =>
        poem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        poem.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        poem.body.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by tag
    if (selectedTag !== 'all') {
      filtered = filtered.filter(poem => poem.tags.includes(selectedTag));
    }

    // Sort
    if (sortBy === 'oldest') {
      filtered.reverse();
    }

    return filtered;
  }, [searchQuery, selectedTag, sortBy]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedTag('all');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen">
      <Container>
        {/* Header */}
        <section className="py-8 sm:py-12">
          <h1 className="text-4xl sm:text-5xl font-serif mb-4 text-text-primary">
            Archive
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            Browse all writing or filter by topic and date.
          </p>
        </section>

        {/* Filters */}
        <section className="pb-8">
          <div className="space-y-4">
            {/* Search */}
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClear={() => setSearchQuery('')}
              icon={<Search size={18} />}
            />

            {/* Filter Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Tag Chips - Mobile Scroll */}
              <div className="flex-1">
                <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap">
                  <Chip
                    active={selectedTag === 'all'}
                    onClick={() => setSelectedTag('all')}
                  >
                    All
                  </Chip>
                  {tags.map(tag => (
                    <Chip
                      key={tag.name}
                      active={selectedTag === tag.name}
                      onClick={() => setSelectedTag(tag.name)}
                    >
                      {tag.name}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="w-full sm:w-48">
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  options={[
                    { value: 'newest', label: 'Newest first' },
                    { value: 'oldest', label: 'Oldest first' }
                  ]}
                />
              </div>
            </div>

            {/* Results Count */}
            <p className="text-sm text-text-muted">
              {filteredPoems.length} {filteredPoems.length === 1 ? 'text' : 'texts'} found
            </p>
          </div>
        </section>

        {/* Results */}
        <section className="pb-12">
          {filteredPoems.length === 0 ? (
            <EmptyState onAction={handleReset} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPoems.map(poem => (
                <PoemCard key={poem.id} poem={poem} />
              ))}
            </div>
          )}
        </section>
      </Container>
    </div>
  );
};