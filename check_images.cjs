const fs = require('fs');
const files = fs.readdirSync('src/assets/images');
files.forEach(f => {
  const stats = fs.statSync('src/assets/images/' + f);
  console.log(f, stats.size, 'bytes');
});
