import { writeFileSync } from 'fs';

const BASE = 'https://gonzalodanielvega.com.ar';

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

const urls = [
  ...pages.map(p => `${BASE}${p}`),
  ...projects.map(p => `${BASE}/proyectos/${p}`),
  ...['como-empece-a-programar'].map(p => `${BASE}/journal/${p}`),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>${url === BASE ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap generated.');
