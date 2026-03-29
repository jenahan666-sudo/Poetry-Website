import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, FilePenLine, Settings, LogOut, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: FileText, label: 'Gedichte', path: '/admin/dashboard', id: 'poems' },
    { icon: FilePenLine, label: 'Entwürfe', path: '/admin/dashboard?filter=draft', id: 'drafts' },
    { icon: Settings, label: 'Einstellungen', path: '/admin/settings', id: 'settings', disabled: true },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-surface-card border-b border-border-default px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <h2 className="text-lg font-serif text-text-primary">Jena</h2>
            <span className="text-xs text-text-muted bg-bg-secondary px-2 py-0.5 rounded">Admin</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-bg-secondary rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed top-[57px] left-0 bottom-0 w-64 bg-surface-card border-r border-border-default z-40 transform transition-transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="p-4 flex-1 overflow-auto">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              if (item.disabled) {
                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-muted cursor-not-allowed opacity-50"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    active
                      ? 'bg-brand-accent/10 text-brand-accent'
                      : 'text-text-secondary hover:bg-bg-secondary hover:text-text-primary'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="p-4 border-t border-border-default">
          <button
            onClick={() => {
              handleLogout();
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-secondary hover:text-text-primary transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Abmelden</span>
          </button>
        </div>
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-surface-card border-r border-border-default flex-col h-screen sticky top-0">
        {/* Logo */}
        <div className="p-6 border-b border-border-default">
          <Link to="/" className="flex items-center gap-2">
            <h2 className="text-xl font-serif text-text-primary">Jena</h2>
            <span className="text-xs text-text-muted bg-bg-secondary px-2 py-1 rounded">Admin</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              if (item.disabled) {
                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-muted cursor-not-allowed opacity-50"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    active
                      ? 'bg-brand-accent/10 text-brand-accent'
                      : 'text-text-secondary hover:bg-bg-secondary hover:text-text-primary'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-border-default">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-secondary hover:text-text-primary transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Abmelden</span>
          </button>
        </div>
      </aside>
    </>
  );
};