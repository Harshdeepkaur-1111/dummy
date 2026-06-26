const fs = require('fs');
const files = fs.readdirSync('dist/assets').filter(f => f.endsWith('.js.map') && f.startsWith('index-'));
const map = JSON.parse(fs.readFileSync('dist/assets/' + files[0]));
const sizes = map.sources.map((src, i) => {
  return { src, size: map.sourcesContent[i] ? map.sourcesContent[i].length : 0 };
}).sort((a, b) => b.size - a.size);
console.log(sizes.slice(0, 20));
