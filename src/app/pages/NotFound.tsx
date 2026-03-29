import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="text-center py-16">
          <h1 className="text-6xl sm:text-7xl font-serif mb-6 text-text-primary">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 text-text-primary">
            Page not found
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. 
            Perhaps you'll find what you need in the archive.
          </p>
          <Link to="/">
            <Button variant="primary" className="gap-2">
              <Home size={18} />
              Go home
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};