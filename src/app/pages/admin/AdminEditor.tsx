import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Switch } from '../../components/ui/switch';
import { ArrowLeft, Save, Eye, Send } from 'lucide-react';
import { poems } from '../../../data/poems';
import { toast } from 'sonner';

export const AdminEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isNew = id === 'new';

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    body: '',
    date: new Date().toISOString().split('T')[0],
    tags: [] as string[],
    isPublished: false,
  });

  const [tagInput, setTagInput] = useState('');

  // Load existing poem data if editing
  useEffect(() => {
    if (!isNew && id) {
      const poem = poems.find(p => p.id === id);
      if (poem) {
        setFormData({
          title: poem.title,
          slug: poem.slug,
          excerpt: poem.excerpt,
          body: poem.body,
          date: poem.date,
          tags: poem.tags,
          isPublished: true,
        });
      } else {
        // Mock draft data - empty form for new entries
        setFormData({
          title: '',
          slug: '',
          excerpt: '',
          body: '',
          date: new Date().toISOString().split('T')[0],
          tags: [],
          isPublished: false,
        });
      }
    }
  }, [id, isNew]);

  // Auto-generate slug from title
  useEffect(() => {
    if (isNew && formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[äÄ]/g, 'ae')
        .replace(/[öÖ]/g, 'oe')
        .replace(/[üÜ]/g, 'ue')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title, isNew]);

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData(prev => ({
          ...prev,
          tags: [...prev.tags, tagInput.trim()],
        }));
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove),
    }));
  };

  const handleSaveDraft = () => {
    toast.success('Als Entwurf gespeichert');
    setTimeout(() => navigate('/admin/dashboard'), 500);
  };

  const handlePublish = () => {
    if (!formData.title || !formData.body) {
      toast.error('Bitte Titel und Inhalt ausfüllen');
      return;
    }
    toast.success('Gedicht veröffentlicht');
    setTimeout(() => navigate('/admin/dashboard'), 500);
  };

  const handlePreview = () => {
    // In a real app, this would open a preview modal or new tab
    toast.info('Vorschau-Funktion (Mock)');
  };

  return (
    <div className="flex min-h-screen bg-bg-primary">
      <AdminSidebar />
      
      <main className="flex-1 overflow-auto lg:ml-0 pt-[57px] lg:pt-0">
        <div className="p-4 md:p-8 max-w-5xl">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 mb-4"
              onClick={() => navigate('/admin/dashboard')}
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Übersicht
            </Button>
            
            <h1 className="text-3xl font-serif mb-2">
              {isNew ? 'Neues Gedicht erstellen' : 'Gedicht bearbeiten'}
            </h1>
            <p className="text-text-secondary">
              {isNew 
                ? 'Verfassen Sie ein neues Gedicht für Ihre Leser' 
                : 'Bearbeiten Sie die Details Ihres Gedichts'}
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Title */}
            <div className="bg-surface-card border border-border-default rounded-[14px] p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Titel <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Der Titel Ihres Gedichts"
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug (URL)</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                    placeholder="gedicht-url-slug"
                  />
                  <p className="text-xs text-text-muted">
                    URL: poesie.ch/gedicht/{formData.slug || 'slug'}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-surface-card border border-border-default rounded-[14px] p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Auszug (2-3 Zeilen)</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Ein kurzer Auszug aus Ihrem Gedicht..."
                    rows={3}
                  />
                  <p className="text-xs text-text-muted">
                    Wird auf der Startseite und in Karten angezeigt
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="body">
                    Gedicht <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="body"
                    value={formData.body}
                    onChange={(e) => setFormData(prev => ({ ...prev, body: e.target.value }))}
                    placeholder="Schreiben Sie hier Ihr Gedicht..."
                    rows={16}
                    className="font-serif"
                  />
                </div>
              </div>
            </div>

            {/* Meta */}
            <div className="bg-surface-card border border-border-default rounded-[14px] p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Veröffentlichungsdatum</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleAddTag}
                    placeholder="Tag hinzufügen und Enter drücken..."
                  />
                  
                  {formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {formData.tags.map(tag => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full text-sm"
                        >
                          {tag}
                          <button
                            onClick={() => handleRemoveTag(tag)}
                            className="hover:text-brand-accent-dark transition-colors"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="bg-surface-card border border-border-default rounded-[14px] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="status" className="text-base">Veröffentlichungsstatus</Label>
                  <p className="text-sm text-text-muted mt-1">
                    {formData.isPublished 
                      ? 'Dieses Gedicht ist öffentlich sichtbar' 
                      : 'Dieses Gedicht ist als Entwurf gespeichert'}
                  </p>
                </div>
                <Switch
                  id="status"
                  checked={formData.isPublished}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isPublished: checked }))}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                variant="secondary"
                size="md"
                className="gap-2 flex-1 sm:flex-none"
                onClick={handleSaveDraft}
              >
                <Save className="w-4 h-4" />
                Als Entwurf speichern
              </Button>
              
              <Button
                variant="secondary"
                size="md"
                className="gap-2 flex-1 sm:flex-none"
                onClick={handlePreview}
              >
                <Eye className="w-4 h-4" />
                Vorschau
              </Button>
              
              <Button
                variant="primary"
                size="md"
                className="gap-2 flex-1 sm:flex-none ml-auto"
                onClick={handlePublish}
              >
                <Send className="w-4 h-4" />
                Veröffentlichen
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};