const fs = require('fs');
fs.writeFileSync('./dist/index.html', fs.readFileSync('./index.html', 'utf-8'))
console.log(fs.readFileSync('./index.html', 'utf-8'));