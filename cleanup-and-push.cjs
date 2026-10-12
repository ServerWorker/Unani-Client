const fs = require('fs');
const cp = require('child_process');

if (fs.existsSync('push-repo.cjs')) {
  fs.unlinkSync('push-repo.cjs');
}

cp.execSync('git add -A', { stdio: 'inherit' });
try {
  cp.execSync('git commit -m "chore: remove push script"', { stdio: 'inherit' });
  cp.execSync('git push origin main', { stdio: 'inherit' });
} catch (e) {
  console.log('No extra commit needed or already up to date');
}

console.log('ALL_SYNC_DONE');
