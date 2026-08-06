#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicImagesDir = path.join(__dirname, '..', 'public', 'images');

async function run() {
  const files = fs.readdirSync(publicImagesDir).filter(f => f.toLowerCase().endsWith('.webp'));
  const results = [];
  for (const f of files) {
    const base = path.parse(f).name;
    const webpPath = path.join(publicImagesDir, f);
    const avifPath = path.join(publicImagesDir, base + '.avif');
    if (fs.existsSync(avifPath)) {
      results.push({ file: f, status: 'skipped - avif exists' });
      continue;
    }
    try {
      await sharp(webpPath).avif({ quality: 60 }).toFile(avifPath);
      results.push({ file: f, status: 'converted' });
    } catch (err) {
      results.push({ file: f, status: 'error: ' + (err && err.message) });
    }
  }
  console.log('Conversion results:');
  results.forEach(r => console.log(r.file, '-', r.status));
}

run().catch(err => { console.error(err); process.exit(1); });
