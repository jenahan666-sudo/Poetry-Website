import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export const About = () => {
  return (
    <div className="min-h-screen">
      <Container>
        <div className="py-8 sm:py-12 max-w-3xl mx-auto">
          {/* Header */}
          <section className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-serif mb-6 text-text-primary">
              About
            </h1>
          </section>

          {/* Mission */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4 text-text-primary">
              What This Is
            </h2>
            <div className="prose prose-lg text-text-secondary space-y-4">
              <p>
                This is a personal writing space. A collection of short texts, reflections, 
                aphorisms, and prose pieces that I want to share with you, the reader.
              </p>
              <p>
                Not everything here is poetry. Some pieces are observations. Some are fragments. 
                Some are longer explorations. The common thread is a focus on precision and 
                thoughtful expression.
              </p>
            </div>
          </section>

          {/* Concept */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4 text-text-primary">
              The Approach
            </h2>
            <div className="prose prose-lg text-text-secondary space-y-4">
              <p>
                Writing appears here regularly, but without strict schedules. The focus is on 
                quality over quantity and each piece gets the time it needs to develop.
              </p>
              <p>
                This project values restraint, clarity, and the space to think. Words that last 
                longer than the moment they're written.
              </p>
            </div>
          </section>

          {/* Future */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4 text-text-primary">
              Ongoing
            </h2>
            <div className="prose prose-lg text-text-secondary space-y-4">
              <p>
                This is an evolving project. For now, it's simply a place to share writing. 
                The structure may change over time, but the core remains the same: thoughtful 
                text, presented clearly.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <div className="bg-surface-card border border-border-default rounded-[14px] p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2 text-text-primary">
                    Contact
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Questions or thoughts? Feel free to reach out.
                  </p>
                  <a
                    href="mailto:jena.writes6@gmail.com"
                    className="text-brand-accent hover:text-brand-accent-hover transition-colors"
                  >
                    jena.writes6@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <Link to="/archiv">
              <Button variant="primary" className="group">
                View Archive
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </section>
        </div>
      </Container>
    </div>
  );
};