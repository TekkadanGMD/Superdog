const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'assets');
const dest = path.join(__dirname, '..', 'dist', 'assets');

try {
  if (fs.existsSync(src)) {
    // cpSync requires Node 16.7+ (Vite 5 requires Node 18, so it works)
    fs.cpSync(src, dest, { recursive: true, force: true });
    console.log('✅ Assets copied successfully to dist/assets (Cross-Platform)');
  } else {
    console.warn('⚠️ Source "assets" directory not found.');
  }
} catch (err) {
  console.error('❌ Error copying assets:', err);
  process.exit(1);
}
