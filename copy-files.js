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

// Create data directory in out
if (!fs.existsSync(path.join('out', 'data'))) {
  fs.mkdirSync(path.join('out', 'data'));
  console.log('Created data directory in out');
}

// Copy JSON data files
const dataFiles = [
  'projects.json',
  'project-images.json'
];

dataFiles.forEach(file => {
  const sourcePath = path.join('data', file);
  const destPath = path.join('out', 'data', file);

  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${file} to out/data directory`);
  } else {
    console.warn(`Warning: ${sourcePath} not found, skipping`);
  }
});

console.log('All files copied successfully!');