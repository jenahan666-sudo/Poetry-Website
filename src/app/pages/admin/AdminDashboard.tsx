import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Edit, 
  Copy, 
  Trash2,
  SortAsc,
  Filter
} from 'lucide-react';
import { poems } from '../../../data/poems';
import { toast } from 'sonner';

interface PoemWithStatus {
  id: string;
  title: string;
  slug: string;
  status: 'published' | 'draft';
  date: string;
  tags: string[];
}

export const AdminDashboard = () => {
  const navigate = useNavigate();
  
  // Mock data with status
  const [poemsList, setPoemsList] = useState<PoemWithStatus[]>([
    ...poems.slice(0, 8).map(p => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      status: 'published' as const,
      date: p.date,
      tags: p.tags,
    })),
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDelete = (id: string, title: string) => {
    setPoemsList(prev => prev.filter(p => p.id !== id));
    toast.success(`"${title}" gelöscht`);
    setActiveDropdown(null);
  };

  const handleDuplicate = (poem: PoemWithStatus) => {
    const newPoem = {
      ...poem,
      id: String(Date.now()),
      title: `${poem.title} (Kopie)`,
      slug: `${poem.slug}-kopie`,
      status: 'draft' as const,
    };
    setPoemsList(prev => [newPoem, ...prev]);
    toast.success(`"${poem.title}" dupliziert`);
    setActiveDropdown(null);
  };

  const filteredPoems = poemsList.filter(poem =>
    poem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    poem.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const stats = {
    total: poemsList.length,
    published: poemsList.filter(p => p.status === 'published').length,
    drafts: poemsList.filter(p => p.status === 'draft').length,
  };

  return (
    <div className="flex min-h-screen bg-bg-primary">
      <AdminSidebar />
      
      <main className="flex-1 overflow-auto lg:ml-0 pt-[57px] lg:pt-0">
        <div className="p-4 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif mb-2">Gedichte verwalten</h1>
            <p className="text-text-secondary">
              Alle Gedichte erstellen, bearbeiten und veröffentlichen
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-surface-card border border-border-default rounded-[14px] p-6">
              <div className="text-sm text-text-secondary mb-1">Gesamt</div>
              <div className="text-3xl font-serif">{stats.total}</div>
            </div>
            <div className="bg-surface-card border border-border-default rounded-[14px] p-6">
              <div className="text-sm text-text-secondary mb-1">Veröffentlicht</div>
              <div className="text-3xl font-serif text-brand-accent">{stats.published}</div>
            </div>
            <div className="bg-surface-card border border-border-default rounded-[14px] p-6">
              <div className="text-sm text-text-secondary mb-1">Entwürfe</div>
              <div className="text-3xl font-serif text-text-muted">{stats.drafts}</div>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="bg-surface-card border border-border-default rounded-[14px] p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <Input
                  placeholder="Gedichte durchsuchen..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-3 w-full md:w-auto">
                <Button variant="secondary" size="md" className="gap-2 flex-1 md:flex-none">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
                <Button variant="secondary" size="md" className="gap-2 flex-1 md:flex-none">
                  <SortAsc className="w-4 h-4" />
                  Sortieren
                </Button>
                <Button 
                  variant="primary" 
                  size="md" 
                  className="gap-2 flex-1 md:flex-none"
                  onClick={() => navigate('/admin/editor/new')}
                >
                  <Plus className="w-4 h-4" />
                  Neuer Eintrag
                </Button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-surface-card border border-border-default rounded-[14px] overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-bg-secondary border-b border-border-default">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-medium text-text-secondary">Titel</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-text-secondary">Status</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-text-secondary">Datum</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-text-secondary">Tags</th>
                    <th className="text-right px-6 py-4 text-sm font-medium text-text-secondary">Aktionen</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPoems.map((poem, index) => (
                    <tr 
                      key={poem.id}
                      className={`border-b border-border-default hover:bg-bg-secondary transition-colors ${
                        index === filteredPoems.length - 1 ? 'border-b-0' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-text-primary">{poem.title}</div>
                        <div className="text-sm text-text-muted">{poem.slug}</div>
                      </td>
                      <td className="px-6 py-4">
                        {poem.status === 'published' ? (
                          <Badge variant="success">Veröffentlicht</Badge>
                        ) : (
                          <Badge variant="secondary">Entwurf</Badge>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-text-secondary">
                        {new Date(poem.date).toLocaleDateString('de-CH', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric'
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-1 flex-wrap">
                          {poem.tags.slice(0, 2).map(tag => (
                            <span 
                              key={tag}
                              className="text-xs px-2 py-1 bg-bg-secondary text-text-secondary rounded"
                            >
                              {tag}
                            </span>
                          ))}
                          {poem.tags.length > 2 && (
                            <span className="text-xs px-2 py-1 text-text-muted">
                              +{poem.tags.length - 2}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="gap-2"
                            onClick={() => navigate(`/admin/editor/${poem.id}`)}
                          >
                            <Edit className="w-4 h-4" />
                            Bearbeiten
                          </Button>
                          
                          <div className="relative">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setActiveDropdown(activeDropdown === poem.id ? null : poem.id)}
                            >
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                            
                            {activeDropdown === poem.id && (
                              <>
                                <div 
                                  className="fixed inset-0 z-10"
                                  onClick={() => setActiveDropdown(null)}
                                />
                                <div className="absolute right-0 mt-2 w-48 bg-surface-card border border-border-default rounded-lg shadow-lg z-20 overflow-hidden">
                                  <button
                                    onClick={() => handleDuplicate(poem)}
                                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-text-primary hover:bg-bg-secondary transition-colors"
                                  >
                                    <Copy className="w-4 h-4" />
                                    Duplizieren
                                  </button>
                                  <button
                                    onClick={() => handleDelete(poem.id, poem.title)}
                                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                    Löschen
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card List */}
            <div className="md:hidden divide-y divide-border-default">
              {filteredPoems.map((poem) => (
                <div key={poem.id} className="p-4 hover:bg-bg-secondary transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-text-primary mb-1 truncate">{poem.title}</h3>
                      <p className="text-sm text-text-muted truncate">{poem.slug}</p>
                    </div>
                    {poem.status === 'published' ? (
                      <Badge variant="success">Veröffentlicht</Badge>
                    ) : (
                      <Badge variant="secondary">Entwurf</Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-3 text-sm text-text-secondary">
                    <span>
                      {new Date(poem.date).toLocaleDateString('de-CH', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                      })}
                    </span>
                  </div>

                  <div className="flex gap-1 flex-wrap mb-4">
                    {poem.tags.map(tag => (
                      <span 
                        key={tag}
                        className="text-xs px-2 py-1 bg-bg-secondary text-text-secondary rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="gap-2 flex-1"
                      onClick={() => navigate(`/admin/editor/${poem.id}`)}
                    >
                      <Edit className="w-4 h-4" />
                      Bearbeiten
                    </Button>
                    
                    <div className="relative">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setActiveDropdown(activeDropdown === poem.id ? null : poem.id)}
                      >
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                      
                      {activeDropdown === poem.id && (
                        <>
                          <div 
                            className="fixed inset-0 z-10"
                            onClick={() => setActiveDropdown(null)}
                          />
                          <div className="absolute right-0 mt-2 w-48 bg-surface-card border border-border-default rounded-lg shadow-lg z-20 overflow-hidden">
                            <button
                              onClick={() => handleDuplicate(poem)}
                              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-text-primary hover:bg-bg-secondary transition-colors"
                            >
                              <Copy className="w-4 h-4" />
                              Duplizieren
                            </button>
                            <button
                              onClick={() => handleDelete(poem.id, poem.title)}
                              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                              Löschen
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredPoems.length === 0 && (
              <div className="text-center py-12 text-text-muted">
                <p>Keine Gedichte gefunden</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};