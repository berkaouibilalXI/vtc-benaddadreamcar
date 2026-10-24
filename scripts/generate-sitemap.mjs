/**
 * Génère public/sitemap.xml à partir de src/data/pages.js (toutes les pages x toutes les langues,
 * avec les alternates hreflang). Exécuté automatiquement avant chaque build (`pnpm build`).
 * Ajouter une page ou une langue dans pages.js suffit : le sitemap suit.
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { LANGS, PAGE_IDS, PAGE_PATHS } from '../src/data/pages.js';
import { SITE_CONFIG } from '../src/data/config.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = SITE_CONFIG.SITE_URL;

const PRIORITY = { home: { fr: '1.0', en: '0.8', ar: '0.8' } };

const urls = [];
for (const id of PAGE_IDS) {
  for (const lang of LANGS) {
    const alternates = [
      ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${site}${PAGE_PATHS[id][l]}" />`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${site}${PAGE_PATHS[id].fr}" />`,
    ].join('\n');
    const priority = PRIORITY[id]?.[lang] ?? (lang === 'fr' ? '0.9' : '0.7');
    urls.push(
      `  <url>\n    <loc>${site}${PAGE_PATHS[id][lang]}</loc>\n${alternates}\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
    );
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

await writeFile(path.join(root, 'public/sitemap.xml'), xml);
console.log(`sitemap.xml : ${urls.length} URL`);
