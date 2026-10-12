const fs = require('fs');
const cp = require('child_process');

if (fs.existsSync('cleanup-and-push.cjs')) {
  fs.unlinkSync('cleanup-and-push.cjs');
}

cp.execSync('git add -A', { stdio: 'inherit' });
cp.execSync('git commit -m "chore: clean workspace"', { stdio: 'inherit' });
cp.execSync('git push origin main', { stdio: 'inherit' });
console.log('CLEAN_AND_PUSHED');
