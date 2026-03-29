import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';

export const Footer = () => {
  return (
    <footer className="bg-bg-secondary border-t border-border-default mt-24">
      <Container>
        <div className="py-16 sm:py-20">
          {/* Main content - centered */}
          <div className="text-center max-w-md mx-auto">
            {/* Brand */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <h3 className="text-base font-serif text-text-primary">
                Jena
              </h3>
              <Link 
                to="/admin/login" 
                className="text-bg-secondary hover:text-text-primary transition-colors text-xs"
                style={{ 
                  opacity: 1, 
                  position: 'relative', 
                  left: '35px'
                }}
              >
                •
              </Link>
            </div>
            <p className="text-sm text-text-secondary/70 mb-8">
              Personal writing · Poetry · Reflections
            </p>

            {/* Navigation links */}
            <div className="flex items-center justify-center gap-6 text-sm text-text-muted">
              <Link to="/archiv" className="hover:text-text-secondary transition-colors">
                Archive
              </Link>
              <span className="text-text-muted/40">·</span>
              <Link to="/about" className="hover:text-text-secondary transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};