import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Archive } from './pages/Archive';
import { TagPage } from './pages/TagPage';
import { PoemDetail } from './pages/PoemDetail';
import { About } from './pages/About';
import { Legal } from './pages/Legal';
import { NotFound } from './pages/NotFound';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminEditor } from './pages/admin/AdminEditor';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Routes>
            {/* Admin routes - no Navbar/Footer */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/editor/:id" element={<AdminEditor />} />
            
            {/* Public routes - with Navbar/Footer */}
            <Route path="*" element={
              <>
                <Navbar />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/archiv" element={<Archive />} />
                    <Route path="/thema/:tagName" element={<TagPage />} />
                    <Route path="/gedicht/:slug" element={<PoemDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/impressum" element={<Legal type="impressum" />} />
                    <Route path="/datenschutz" element={<Legal type="datenschutz" />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </>
            } />
          </Routes>

          <Toaster 
            position="bottom-center"
            toastOptions={{
              style: {
                background: 'var(--surface-card)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-default)',
                borderRadius: '10px',
              },
            }}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
