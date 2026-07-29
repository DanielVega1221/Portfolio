import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const PORT = 4173;
const BASE = `http://localhost:${PORT}`;

const ROUTES = [
  '/',
  '/proyectos',
  '/journal',
  '/sobre-mi',
  '/dialogo',
  '/proyectos/brunn-studio',
  '/proyectos/lumen',
  '/proyectos/marea',
  '/proyectos/stro-atelier',
  '/proyectos/zabira-studio',
  '/proyectos/content-studio',
  '/proyectos/uxnicorp-academy',
  '/proyectos/la-pagina-de-uxnicorp',
  '/proyectos/myvisor',
  '/proyectos/electropower',
  '/proyectos/jimena-vilte',
  '/proyectos/patagenda',
  '/proyectos/ducksale',
  '/proyectos/comercial-rio-hondo',
  '/proyectos/isdep',
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

      // If it's a file request (js, css, images, etc.), serve it directly
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
        // HTML route — serve index.html for SPA routing
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

  const browser = await chromium.launch();

  for (let i = 0; i < ROUTES.length; i++) {
    const route = ROUTES[i];
    const page = await browser.newPage();

    try {
      await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForSelector('#app-root', { timeout: 10000 });
      // Wait for React to finish rendering content
      await page.waitForFunction(() => {
        const root = document.getElementById('app-root');
        return root && root.textContent && root.textContent.trim().length > 100;
      }, { timeout: 10000 });
      await page.waitForTimeout(500);

      const html = await page.content();
      const outDir = path.join(DIST, route);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), html);

      console.log(`  ✓ ${route || '/'}`);
    } catch (err) {
      console.log(`  ✗ ${route || '/'}: ${err.message}`);
    } finally {
      await page.close();
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
