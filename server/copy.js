const fs = require('fs');
fs.writeFileSync('./dist/index.html', fs.readFileSync('./index.html', 'utf-8').replaceAll(' ', ''))
console.log(fs.readFileSync('./index.html', 'utf-8'));