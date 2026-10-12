const cp = require('child_process');

function run(cmd) {
  console.log('RUN:', cmd);
  try {
    const out = cp.execSync(cmd, { encoding: 'utf8', stdio: 'pipe' });
    console.log(out);
  } catch (err) {
    console.error('FAIL:', err.message);
    if (err.stdout) console.log('STDOUT:', err.stdout.toString());
    if (err.stderr) console.error('STDERR:', err.stderr.toString());
    process.exit(1);
  }
}

run('git init');
run('git config user.name "ServerWorker"');
run('git config user.email "serverworker7@gmail.com"');
run('git add -A');
try {
  run('git commit -m "feat: complete website overhaul with liquid metal animations, mobile responsive design, and deployment configs"');
} catch (e) {
  console.log('Commit note: already committed or empty');
}
run('git branch -M main');
run('git remote remove origin');
run('git remote add origin https://github.com/ServerWorker/Unani-Client.git');
console.log('Local git configured with origin successfully.');
