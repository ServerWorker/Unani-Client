const cp = require('child_process');
const fs = require('fs');

if (fs.existsSync('configure-origin.cjs')) {
  fs.unlinkSync('configure-origin.cjs');
}

function run(cmd) {
  console.log('RUN:', cmd);
  try {
    const out = cp.execSync(cmd, { encoding: 'utf8', stdio: 'pipe' });
    console.log(out);
  } catch (err) {
    console.error('FAIL:', err.message);
    if (err.stdout) console.log('STDOUT:', err.stdout.toString());
    if (err.stderr) console.error('STDERR:', err.stderr.toString());
  }
}

run('git add -A');
run('git commit -m "chore: clean up setup scripts"');
run('git push -u origin main');
