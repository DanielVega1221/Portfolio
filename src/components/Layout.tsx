import { useState, useCallback } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Library, Layers, BookOpen, User, Mail,
  Menu, X, Check, Copy,
} from 'lucide-react';
import StudioTapes from './StudioTapes';

const NAV_ITEMS = [
  { path: '/', label: 'Apertura', icon: BookOpen },
  { path: '/proyectos', label: 'Proyectos', icon: Layers },
  { path: '/journal', label: 'Journal', icon: Library },
  { path: '/sobre-mi', label: 'Sobre mí', icon: User },
  { path: '/dialogo', label: 'Diálogo', icon: Mail },
] as const;

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const copyToClipboard = useCallback(async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast(label);
      setTimeout(() => setToast(null), 2000);
    } catch {
      // fallback silently
    }
  }, []);

  const getCurrentTab = (): string => {
    const path = location.pathname;
    if (path.startsWith('/proyectos')) return 'portfolio';
    if (path.startsWith('/journal')) return 'journal';
    if (path.startsWith('/sobre-mi')) return 'about';
    if (path.startsWith('/dialogo')) return 'contact';
    return 'home';
  };

  const currentTab = getCurrentTab();

  return (
    <div className="min-h-screen relative flex flex-col selection:bg-amber-100 selection:text-amber-900" id="app-root">
      <div className="grain-overlay"></div>

      <header className="border-b border-[#1a1a1a]/10 sticky top-0 bg-[#f9f7f2]/95 backdrop-blur-md z-40 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row md:items-baseline gap-3">
            <Link
              to="/"
              className="text-serif text-lg font-bold tracking-tighter uppercase hover:opacity-80 transition-opacity text-[#1a1a1a]"
            >
              GONZALO DANIEL VEGA
            </Link>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#1a1a1a]/60 font-medium">
              Ubicación: SFV Catamarca, Catamarca, AR
            </span>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#1a1a1a]/70 hover:text-[#1a1a1a]"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-wrap justify-center gap-1 sm:gap-2`}>
            {NAV_ITEMS.map((item) => {
              const IconComp = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-1.5 rounded-sm text-xs font-mono tracking-wider transition-all duration-200 uppercase flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#a84432] text-[#f9f7f2]'
                      : 'text-[#1a1a1a]/60 hover:text-[#1a1a1a] hover:bg-[#a84432]/5'
                  }`}
                >
                  <IconComp size={12} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="border-t border-[#1a1a1a]/10 py-12 bg-[#efede8]/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#1a1a1a]/50 font-mono">
          <div>
            <p>
              © 2026 Gonzalo Daniel Vega. Todos los derechos reservados.
            </p>
            <p className="text-[10px] text-[#1a1a1a]/40 mt-1">Hecho con criterio y desarrollo a medida.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/gonzalo-daniel-vega/" target="_blank" rel="noopener noreferrer" className="hover:text-[#a84432] transition-colors">LINKEDIN</a>
            <span>•</span>
            <a href="https://github.com/DanielVega1221" target="_blank" rel="noopener noreferrer" className="hover:text-[#a84432] transition-colors">GITHUB</a>
            <span>•</span>
            <button onClick={() => copyToClipboard('+5493834368748', 'Número copiado')} className="hover:text-[#a84432] transition-colors cursor-pointer">NÚMERO</button>
            <span>•</span>
            <button onClick={() => copyToClipboard('dvega6442@gmail.com', 'Mail copiado')} className="hover:text-[#a84432] transition-colors cursor-pointer">EMAIL</button>
          </div>
        </div>
      </footer>

      {toast && (
        <div className="fixed bottom-20 z-50 bg-[#1a1a1a] text-[#f9f7f2] px-4 py-2 rounded-sm shadow-lg font-mono text-[11px] uppercase tracking-wider flex items-center gap-2 animate-fade-in">
          <Check size={13} className="text-emerald-400" />
          {toast}
        </div>
      )}

      <StudioTapes currentTab={currentTab} />
    </div>
  );
}
