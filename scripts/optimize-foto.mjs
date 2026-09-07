import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.resolve(__dirname, '..', 'public');
const SRC = path.join(PUBLIC, 'foto.png');
const TMP_PNG = path.join(PUBLIC, '.foto.tmp.png');
const OUT_PNG = path.join(PUBLIC, 'foto.png');
const OUT_WEBP = path.join(PUBLIC, 'foto.webp');
const SIZE = 400;

const meta = await sharp(SRC).metadata();
console.log(`Source: ${meta.width}x${meta.height}, ${(fs.statSync(SRC).size / 1024).toFixed(0)} KiB`);

await sharp(SRC)
  .resize(SIZE, SIZE, { fit: 'cover', withoutEnlargement: true })
  .png({ compressionLevel: 9, palette: true })
  .toFile(TMP_PNG);
fs.renameSync(TMP_PNG, OUT_PNG);
console.log(`foto.png -> ${(fs.statSync(OUT_PNG).size / 1024).toFixed(0)} KiB`);

await sharp(SRC)
  .resize(SIZE, SIZE, { fit: 'cover', withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile(OUT_WEBP);
console.log(`foto.webp -> ${(fs.statSync(OUT_WEBP).size / 1024).toFixed(0)} KiB`);