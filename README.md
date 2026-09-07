# Gonzalo Daniel Vega — Portfolio

Portfolio personal de Gonzalo Daniel Vega, Full Stack Developer con criterio de producto. Bilingüe (es/en), construido como una unipágina navegable: proyectos, notas de campo (journal) y un formulario de contacto que me llega por mail.

Disponible en [gonzalodanielvega.com.ar](https://gonzalodanielvega.com.ar).

## Stack

- **React 19** + **Vite 6** + **TypeScript**
- **Tailwind CSS 4** (vía plugin oficial de Vite)
- **React Router 7** — rutas bilingües bajo `/en` con detección de idioma propia
- **Motion** — animaciones
- **Lucide** — iconos
- **Resend** — API de mail para el formulario de contacto (serverless en `/api`)
- **Playwright + sharp** — scripts de generación de covers y optimización de imágenes

## Scripts

```bash
npm install          # instala dependencias y el browser de Playwright (postinstall)
npm run dev          # servidor de desarrollo en http://localhost:3000
npm run build        # sitemap -> optimiza foto -> produccion -> prerender de rutas
npm run preview      # sirve el build localmente
npm run lint         # ESLint + typecheck (tsc --noEmit)
npm run format       # Prettier sobre src
npm run screenshots  # captura los covers de los proyectos publicados (1280x800 jpg)
npm run optimize:foto # optimiza public/foto.png a webp para la home
```

El build es reproducible: primero genera y valida el `sitemap.xml` (falla si algún proyecto no tiene cover publicado ni declarado), optimiza la foto de perfil, compila con Vite y por último prerenderiza las 46 rutas (es/en) con Playwright para que las páginas lleguen con contenido estático a los crawlers.

## Formulario de contacto

El endpoint `/api/contact` requiere la API key de Resend:

```bash
cp .env.example .env.local   # y completar RESEND_API_KEY
```

En producción la key se define como variable de entorno en el entorno de despliegue. El mail llega a la casilla personal del autor; no se guardan los mensajes en ningún lado.

## Estructura

```
api/contact.ts          Funcion serverless del formulario (Resend)
scripts/                Build: sitemap, prerender, rutas, optimizacion de imagenes, screenshots
src/components/         Layout, PageMeta (SEO por ruta), carrusel de cintas (StudioTapes), etc.
src/data/               Proyectos, journal y cintas en es/en
src/i18n/               Contexto de idioma, traducciones y helpers
src/pages/              Home, Portfolio, Journal, Sobre mi, Contacto, 404
```

## Deploy

Pensado para **Vercel** con `vercel.json`: rewrites de SPA y cache de larga duración para los assets estáticos. No hace falta ninguna configuracion extra: el build command es `npm run build` y el output es `dist`.