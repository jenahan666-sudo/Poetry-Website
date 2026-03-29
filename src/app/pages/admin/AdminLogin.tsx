import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Label } from '../../components/ui/label';
import { LockKeyhole } from 'lucide-react';

export const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Bitte alle Felder ausfüllen');
      return;
    }
    
    // Mock login validation
    if (email !== 'admin@test.com' || password !== 'Test') {
      setError('Ungültige E-Mail oder Passwort');
      return;
    }
    
    // Mock login - just navigate to dashboard
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-16">
      <Container>
        <div className="max-w-md mx-auto">
          <div className="bg-surface-card border border-border-default rounded-[14px] p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-accent/10 mb-4">
                <LockKeyhole className="w-6 h-6 text-brand-accent" />
              </div>
              <h1 className="text-2xl font-serif mb-2">Admin Login</h1>
              <p className="text-sm text-text-secondary">
                Melden Sie sich an, um Gedichte zu verwalten
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="admin@poesie.ch"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Passwort</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <div className="text-sm text-red-500 bg-red-50 dark:bg-red-950/20 px-3 py-2 rounded-lg">
                  {error}
                </div>
              )}

              <Button type="submit" variant="primary" size="md" fullWidth>
                Anmelden
              </Button>

              <button
                type="button"
                disabled
                className="text-sm text-text-muted hover:text-text-secondary transition-colors w-full text-center opacity-50 cursor-not-allowed"
              >
                Passwort vergessen?
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};