import { useCallback, useEffect, useRef, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LangContext, localizePath, type Lang } from './useLanguage';

function preferredLanguage(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'es') return saved;
    const nav = navigator.language?.toLowerCase() || '';
    return nav.startsWith('es') ? 'es' : 'en';
  } catch {
    return 'es';
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lang: Lang = location.pathname.startsWith('/en') ? 'en' : 'es';

  const redirectChecked = useRef(false);
  useEffect(() => {
    if (redirectChecked.current) return;
    redirectChecked.current = true;
    if (location.pathname === '/' && preferredLanguage() === 'en') {
      navigate('/en', { replace: true });
    }
  }, [location.pathname, navigate]);

  const toggleLang = useCallback(() => {
    const next: Lang = lang === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', next);
    navigate(localizePath(location.pathname + location.search, next));
  }, [lang, location.pathname, location.search, navigate]);

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}