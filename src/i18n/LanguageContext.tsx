import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

type Lang = 'es' | 'en';

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'es',
  toggleLang: () => {},
});

export function useLanguage() {
  return useContext(LangContext);
}

function detectLanguage(): Lang {
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
  const [lang, setLang] = useState<Lang>('es');

  useEffect(() => {
    setLang(detectLanguage());
  }, []);

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next = prev === 'es' ? 'en' : 'es';
      localStorage.setItem('lang', next);
      return next;
    });
  }, []);

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}
