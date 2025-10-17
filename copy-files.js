const fs = require('fs');
const path = require('path');

const files = ['_routes.json', '_headers', '_redirects'];

const OUTPUT_STATIC_DIR = (() => {
  const nextOnPagesDir = path.join('.vercel', 'output', 'static');
  if (fs.existsSync(nextOnPagesDir)) {
    return nextOnPagesDir;
  }

  if (fs.existsSync('out')) {
    return 'out';
  }

  return null;
})();

if (!OUTPUT_STATIC_DIR) {
  console.error(
    'Error: No static output directory found. Run the appropriate build command before copying files.'
  );
  process.exit(1);
}

// Copy each file from public to the static output directory
files.forEach(file => {
  const sourcePath = path.join('public', file);
  const destPath = path.join(OUTPUT_STATIC_DIR, file);

  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${file} to ${OUTPUT_STATIC_DIR}`);
  } else {
    console.warn(`Warning: ${sourcePath} not found, skipping`);
  }
});

const outputDataDir = path.join(OUTPUT_STATIC_DIR, 'data');
if (!fs.existsSync(outputDataDir)) {
  fs.mkdirSync(outputDataDir, { recursive: true });
  console.log(`Created data directory in ${OUTPUT_STATIC_DIR}`);
}

// Copy JSON data files
const dataFiles = [
  'projects.json',
  'project-images.json'
];

dataFiles.forEach(file => {
  const sourcePath = path.join('data', file);
  const destPath = path.join(outputDataDir, file);

  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${file} to ${path.join(OUTPUT_STATIC_DIR, 'data')} directory`);
  } else {
    console.warn(`Warning: ${sourcePath} not found, skipping`);
  }
});

console.log('All files copied successfully!');