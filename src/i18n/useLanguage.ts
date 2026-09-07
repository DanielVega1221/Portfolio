import { createContext, useContext } from 'react';

export type Lang = 'es' | 'en';

export interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
}

export const LangContext = createContext<LangContextType>({
  lang: 'es',
  toggleLang: () => {},
});

export function useLanguage() {
  return useContext(LangContext);
}