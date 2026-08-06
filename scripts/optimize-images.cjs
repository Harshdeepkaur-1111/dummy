#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const https = require('https');
const http = require('http');

const publicImagesDir = path.join(__dirname, '..', 'public', 'images');
const originalsDir = path.join(publicImagesDir, 'originals');
if (!fs.existsSync(publicImagesDir)) fs.mkdirSync(publicImagesDir, { recursive: true });
if (!fs.existsSync(originalsDir)) fs.mkdirSync(originalsDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    const req = lib.get(url, (res) => {
      if (res.statusCode !== 200) return reject(new Error('Failed to download ' + url));
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    });
    req.on('error', (err) => reject(err));
  });
}

async function convertFile(srcPath, baseName) {
  const outAvif = path.join(publicImagesDir, baseName + '.avif');
  const outWebp = path.join(publicImagesDir, baseName + '.webp');
  try {
    // Always attempt to write AVIF. For WEBP output, avoid writing to the same
    // path as the input (sharp will error if input and output are identical).
    const ext = path.extname(srcPath).toLowerCase();
    await sharp(srcPath).avif({ quality: 60 }).toFile(outAvif);
    if (ext !== '.webp' || outWebp !== srcPath) {
      await sharp(srcPath).webp({ quality: 75 }).toFile(outWebp);
    }
    console.log('Converted:', baseName);
  } catch (err) {
    console.error('Error converting', srcPath, err.message);
  }
}

async function run() {
  console.log('Scanning public/images for conversions...');
  // Only convert common raster source formats here; avoid re-processing existing webp/avif files
  const files = fs.readdirSync(publicImagesDir).filter(f => /\.(jpe?g|png|tiff)$/i.test(f));
  for (const f of files) {
    const src = path.join(publicImagesDir, f);
    const base = path.parse(f).name;
    await convertFile(src, base);
  }

  // Try to find external image URLs inside src/data.ts and download them
  const dataPath = path.join(__dirname, '..', 'src', 'data.ts');
  if (fs.existsSync(dataPath)) {
    const content = fs.readFileSync(dataPath, 'utf8');
    // Use RegExp constructor to avoid accidental escaping issues in different environments
    const urlRegex = new RegExp("https?://[^\"'\\s)]+\\.(?:png|jpg|jpeg|webp)", 'gi');
    const urls = Array.from(content.matchAll(urlRegex)).map(m => m[0]);
    for (const url of [...new Set(urls)]) {
      try {
        const u = new URL(url);
        const fname = path.basename(u.pathname).split('?')[0];
        const dest = path.join(originalsDir, fname);
        if (!fs.existsSync(dest)) {
          console.log('Downloading', url);
          await download(url, dest);
          const base = path.parse(fname).name;
          await convertFile(dest, base);
        } else {
          console.log('Already downloaded', fname);
        }
      } catch (err) {
        console.warn('Skipping URL', url, err.message);
      }
    }
  }

  console.log('Image optimization complete. Generated .avif and .webp files into public/images');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
