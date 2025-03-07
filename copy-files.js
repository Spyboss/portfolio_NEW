const fs = require('fs');
const path = require('path');

const files = [
  '_routes.json',
  '_headers',
  '_redirects'
];

// Ensure out directory exists
if (!fs.existsSync('out')) {
  console.error('Error: out directory does not exist. Run npm run build first.');
  process.exit(1);
}

// Copy each file from public to out
files.forEach(file => {
  const sourcePath = path.join('public', file);
  const destPath = path.join('out', file);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${file} to out directory`);
  } else {
    console.warn(`Warning: ${sourcePath} not found, skipping`);
  }
});

console.log('All files copied successfully!'); 