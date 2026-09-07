import { writeFileSync } from 'fs';

const BASE = 'https://gonzalodanielvega.com.ar';
const LASTMOD = new Date().toISOString().slice(0, 10);

const pages = [
  '',
  '/proyectos',
  '/journal',
  '/sobre-mi',
  '/dialogo',
];

const projects = [
  'brunn-studio', 'lumen', 'marea', 'stro-atelier', 'zabira-studio',
  'content-studio', 'uxnicorp-academy', 'la-pagina-de-uxnicorp', 'myvisor',
  'electropower', 'jimena-vilte', 'patagenda', 'ducksale', 'comercial-rio-hondo', 'isdep',
];

const journal = [
  'como-empece-a-programar',
  'de-la-facultad-a-productos',
  'hablar-con-clientes',
];

const esPaths = [
  ...pages,
  ...projects.map(p => `/proyectos/${p}`),
  ...journal.map(j => `/journal/${j}`),
];

const enPaths = esPaths.map(p => (p === '' ? '/en' : `/en${p}`));

function hangul(path) {
  const basePath = path === '' ? '' : path;
  const esUrl = `${BASE}${basePath}`;
  const enUrl = `${BASE}/en${basePath}`;
  const xDefaultUrl = esUrl;

  const alternates = [
    ['es', esUrl],
    ['en', enUrl],
    ['x-default', xDefaultUrl],
  ]
    .map(([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`)
    .join('\n');

  const priority = path === '' ? '1.0' : path.startsWith('/proyectos/') ? '0.8' : '0.8';
  const changefreq = path.startsWith('/proyectos/') ? 'weekly' : 'monthly';

  return `  <url>
    <loc>${esUrl}</loc>
    ${alternates}
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
  <url>
    <loc>${enUrl}</loc>
    ${alternates}
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${esPaths.map(hangul).join('\n')}
</urlset>
`;

writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap generated.');