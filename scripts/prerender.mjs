import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const PORT = 4173;
const BASE = `http://localhost:${PORT}`;

const PROJECTS = [
  'brunn-studio',
  'lumen',
  'marea',
  'stro-atelier',
  'zabira-studio',
  'content-studio',
  'uxnicorp-academy',
  'la-pagina-de-uxnicorp',
  'myvisor',
  'electropower',
  'jimena-vilte',
  'patagenda',
  'ducksale',
  'comercial-rio-hondo',
  'isdep',
];

const JOURNAL = [
  'como-empece-a-programar',
  'de-la-facultad-a-productos',
  'hablar-con-clientes',
];

const PAGES = [
  '',
  '/proyectos',
  '/journal',
  '/sobre-mi',
  '/dialogo',
];

const ROUTES = [
  ...PAGES,
  ...PROJECTS.map(p => `/proyectos/${p}`),
  ...JOURNAL.map(j => `/journal/${j}`),
];

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = req.url === '/' ? '/index.html' : req.url;
      const filePath = path.join(DIST, urlPath);
      const ext = path.extname(filePath);

      if (ext && ext !== '.html') {
        fs.readFile(filePath, (err, data) => {
          if (err) {
            res.writeHead(404);
            res.end('Not found');
          } else {
            res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
            res.end(data);
          }
        });
      } else {
        fs.readFile(path.join(DIST, 'index.html'), (err, data) => {
          if (err) {
            res.writeHead(404);
            res.end('Not found');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
          }
        });
      }
    });

    server.listen(PORT, () => {
      console.log(`Static server on :${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  const server = await startServer();
  console.log('Prerendering...\n');

  const browser = await chromium.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
    ],
  });

  const variants = [
    { prefix: '', lang: 'es', locale: 'es-ES' },
    { prefix: '/en', lang: 'en', locale: 'en-US' },
  ];

  for (const variant of variants) {
    for (const route of ROUTES) {
      const fullRoute = `${variant.prefix}${route}`;
      const page = await browser.newPage({ locale: variant.locale });

      try {
        await page.goto(`${BASE}${fullRoute}`, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForSelector('#app-root', { timeout: 10000 });
        await page.waitForFunction(() => {
          const root = document.getElementById('app-root');
          return root && root.textContent && root.textContent.trim().length > 100;
        }, { timeout: 10000 });
        await page.waitForFunction(
          (expectedLang) => document.documentElement.lang === expectedLang,
          variant.lang,
          { timeout: 10000 }
        );
        await page.waitForTimeout(500);

        const html = await page.content();
        const outDir = path.join(DIST, fullRoute);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, 'index.html'), html);

        console.log(`  ✓ ${fullRoute}`);
      } catch (err) {
        console.log(`  ✗ ${fullRoute}: ${err.message}`);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();
  server.close();
  console.log('\nPrerender complete.');
}

prerender().catch(err => {
  console.log(`Prerender skipped: ${err.message.split('\n')[0]}`);
  process.exit(0);
});