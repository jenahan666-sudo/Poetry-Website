import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { FeaturedPoemCard } from '../components/poems/FeaturedPoemCard';
import { PoemCard } from '../components/poems/PoemCard';
import { TagCard } from '../components/poems/TagCard';
import { poems, tags } from '../../data/poems';

export const Home = () => {
  const featuredPoem = poems[0]; // Most recent poem
  const recentPoems = poems.slice(1, 5); // Next 4 poems
  const topTags = tags.slice(0, 6);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Container>
        {/* Hero / Featured Poem */}
        <section className="py-8 sm:py-12">
          <FeaturedPoemCard poem={featuredPoem} />
        </section>

        {/* Recent Poems */}
        <section className="py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif text-text-primary">
              Recent Writing
            </h2>
            <Link to="/archiv">
              <Button variant="ghost" className="group">
                View all
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPoems.map(poem => (
              <PoemCard key={poem.id} poem={poem} />
            ))}
          </div>
        </section>

        {/* Browse by Tags */}
        <section className="py-12">
          <h2 className="text-3xl font-serif mb-8 text-text-primary">
            Browse by Topic
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {topTags.map(tag => (
              <TagCard key={tag.name} tag={tag} />
            ))}
          </div>
        </section>

        {/* About CTA */}
        <section className="py-12 mb-12">
          <div className="bg-surface-card border border-border-default rounded-[14px] p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-serif mb-4 text-text-primary">
              About This Project
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6 leading-relaxed">
              Regular writing: short texts, reflections, and prose. A space for words that explore limits, clarity, and growth.
            </p>
            <Link to="/about">
              <Button variant="secondary">
                Learn more
              </Button>
            </Link>
          </div>
        </section>
      </Container>
    </motion.div>
  );
};