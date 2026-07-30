import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { caseStudies } from '../data/projects';

const defaults: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Gonzalo Daniel Vega — Full Stack Developer',
    description:
      'Portfolio profesional. Full Stack Developer con criterio de producto. React, Next.js, TypeScript, Node.js. De Catamarca, Argentina.',
  },
  '/proyectos': {
    title: 'Proyectos — Gonzalo Daniel Vega | Full Stack Developer',
    description:
      '15 proyectos de desarrollo web: demos conceptuales, herramientas, clientes reales. React, Next.js, Astro, Node.js, TypeScript, PostgreSQL.',
  },
  '/journal': {
    title: 'Journal — Gonzalo Daniel Vega | Notas de Campo',
    description:
      'Notas de campo sobre desarrollo web, arquitectura de software, experiencia de usuario y criterio técnico.',
  },
  '/sobre-mi': {
    title: 'Sobre mí — Gonzalo Daniel Vega | Full Stack Developer',
    description:
      'Full Stack Developer. Estudiante de Ingeniería en Informática. UXnicorp. Catamarca, Argentina.',
  },
  '/dialogo': {
    title: 'Contacto — Gonzalo Daniel Vega | Full Stack Developer',
    description:
      'Escribime para charlar sobre tu proyecto, idea o problema técnico. Respondo personalmente.',
  },
};

const BASE_URL = 'https://gonzalodanielvega.com.ar';

function getMeta(pathname: string) {
  if (pathname === '/') return defaults['/'];

  if (pathname.startsWith('/proyectos/')) {
    const id = pathname.replace('/proyectos/', '');
    const project = caseStudies.find(p => p.id === id);
    if (project) {
      return {
        title: `${project.title} — Gonzalo Daniel Vega`,
        description: `${project.tagline} | ${project.tools.join(', ')}`,
      };
    }
    return defaults['/proyectos'];
  }
  if (pathname === '/proyectos') return defaults['/proyectos'];

  if (pathname.startsWith('/journal/')) return defaults['/journal'];
  if (pathname === '/journal') return defaults['/journal'];

  if (pathname === '/sobre-mi') return defaults['/sobre-mi'];
  if (pathname === '/dialogo') return defaults['/dialogo'];

  return defaults['/'];
}

export default function PageMeta() {
  const location = useLocation();

  useEffect(() => {
    const meta = getMeta(location.pathname);

    document.title = meta.title;

    const setMetaContent = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', content);
    };

    setMetaContent('meta[name="description"]', meta.description);
    setMetaContent('meta[property="og:title"]', meta.title);
    setMetaContent('meta[property="og:description"]', meta.description);
    setMetaContent('meta[property="og:url"]', `${BASE_URL}${location.pathname}`);
    setMetaContent('meta[name="twitter:title"]', meta.title);
    setMetaContent('meta[name="twitter:description"]', meta.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${BASE_URL}${location.pathname}`);
    }
  }, [location.pathname]);

  return null;
}
