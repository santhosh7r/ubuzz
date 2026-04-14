const fs = require('fs');
const path = require('path');

function walk(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const p = path.join(dir, file);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p);
    else if (p.endsWith('.tsx') || p.endsWith('.css') || p.endsWith('.ts')) {
      let content = fs.readFileSync(p, 'utf8');
      let newContent = content
        .replace(/#0199ff/gi, '#4361EE')
        .replace(/#0188e6/gi, '#4361EE')
        .replace(/(text|bg|border|from|to|via)-blue-[34567]00/g, '$1-[#4361EE]');
      if (content !== newContent) {
        fs.writeFileSync(p, newContent);
        console.log('Updated: ' + p);
      }
    }
  }
}

walk('./src');
console.log('Done mapping brand colors.');
