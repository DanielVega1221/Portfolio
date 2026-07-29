import { useState, useCallback } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { ui } from '../i18n/translations';
import {
  Library, Layers, BookOpen, User, Mail,
  Menu, X, Check, Copy,
} from 'lucide-react';
import StudioTapes from './StudioTapes';

export default function Layout() {
  const location = useLocation();
  const { lang, toggleLang } = useLanguage();
  const t = (p: any) => p[lang];

  const navItems = [
    { path: '/', label: t(ui.nav.home), icon: BookOpen },
    { path: '/proyectos', label: t(ui.nav.projects), icon: Layers },
    { path: '/journal', label: t(ui.nav.journal), icon: Library },
    { path: '/sobre-mi', label: t(ui.nav.about), icon: User },
    { path: '/dialogo', label: t(ui.nav.contact), icon: Mail },
  ] as const;
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
            {navItems.map((item) => {
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
            <button onClick={toggleLang} className="font-mono text-[10px] uppercase tracking-wider text-[#1a1a1a]/40 hover:text-[#a84432] transition-colors cursor-pointer ml-2">
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
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
              {t(ui.footer.copyright)}
            </p>
            <p className="text-[10px] text-[#1a1a1a]/40 mt-1">{t(ui.footer.made)}</p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/gonzalo-daniel-vega/" target="_blank" rel="noopener noreferrer" className="hover:text-[#a84432] transition-colors">LINKEDIN</a>
            <span>•</span>
            <a href="https://github.com/DanielVega1221" target="_blank" rel="noopener noreferrer" className="hover:text-[#a84432] transition-colors">GITHUB</a>
            <span>•</span>
            <button onClick={() => copyToClipboard('+5493834368748', t(ui.footer.copyPhone))} className="hover:text-[#a84432] transition-colors cursor-pointer">{t(ui.footer.phone)}</button>
            <span>•</span>
            <button onClick={() => copyToClipboard('dvega6442@gmail.com', t(ui.footer.copyEmail))} className="hover:text-[#a84432] transition-colors cursor-pointer">EMAIL</button>
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
