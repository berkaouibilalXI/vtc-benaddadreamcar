/**
 * Génère les images optimisées servies par le site à partir des originaux
 * conservés dans raw/images/ (non déployés).
 *
 *   pnpm images
 *
 * - Les originaux PNG (jusqu'à 11 Mo) sont convertis en WebP aux dimensions réelles d'affichage.
 * - og.jpg (1200x630) est l'image de partage pour les réseaux sociaux / WhatsApp.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = (f) => path.join(root, 'raw/images', f);
const out = (f) => path.join(root, 'public', f);

await mkdir(out('assets'), { recursive: true });

// Hero + véhicule : affichés jusqu'à ~520 px de haut (retina => 1080 px de large suffit)
await sharp(src('hero.png')).resize({ width: 1080 }).webp({ quality: 80 }).toFile(out('assets/hero.webp'));
await sharp(src('pass-at-pro.png')).resize({ width: 1043 }).webp({ quality: 80 }).toFile(out('assets/pass-at-pro.webp'));

// Vignettes de services : affichées en 56–76 px => 192 px couvre le retina x2.5
for (const name of ['airport', 'hotel', 'business', 'chauffeur', 'outside']) {
  await sharp(src(`service-${name}.png`))
    .resize({ width: 192, height: 192, fit: 'cover' })
    .webp({ quality: 80 })
    .toFile(out(`assets/service-${name}.webp`));
}

// Logo (affiché en 75 px de large) + version PNG pour les données structurées
await sharp(src('logo-black.png')).resize({ width: 300 }).webp({ quality: 85 }).toFile(out('logo-black.webp'));
await sharp(src('logo-black.png')).resize({ width: 512 }).png({ compressionLevel: 9 }).toFile(out('logo-512.png'));

// Image Open Graph 1200x630
const W = 1200;
const H = 630;
const logo = await sharp(src('logo-black.png')).resize({ width: 480 }).png().toBuffer();
const logoMeta = await sharp(logo).metadata();
const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#F5F5F3"/>
  <rect x="0" y="0" width="14" height="${H}" fill="#B51F2A"/>
  <g font-family="DejaVu Sans, Arial, sans-serif">
    <text x="620" y="250" font-size="54" font-weight="700" fill="#111111">Chauffeur privé</text>
    <text x="620" y="318" font-size="54" font-weight="700" fill="#111111">à Oran</text>
    <rect x="620" y="346" width="56" height="5" rx="2" fill="#B51F2A"/>
    <text x="620" y="408" font-size="24" fill="#6B6B6B">Transferts aéroport • Hôtels • Business</text>
    <text x="620" y="452" font-size="24" fill="#6B6B6B">Disponible 24h/24 • 7j/7</text>
  </g>
</svg>`;
await sharp(Buffer.from(svg))
  .composite([{ input: logo, left: 70, top: Math.round((H - logoMeta.height) / 2) }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(out('og.jpg'));

console.log('Images optimisées générées dans public/');
