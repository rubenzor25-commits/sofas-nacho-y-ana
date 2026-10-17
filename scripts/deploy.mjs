// Publica la carpeta dist/ en la rama gh-pages (GitHub Pages).
// Uso: npm run build && npm run deploy
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, cpSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const run = (cmd, args, cwd) => execFileSync(cmd, args, { cwd, stdio: 'inherit' });
const out = (cmd, args, cwd) => execFileSync(cmd, args, { cwd }).toString().trim();

if (!existsSync('dist/index.html')) {
  console.error('No existe dist/. Ejecuta primero: npm run build');
  process.exit(1);
}

const remote = out('git', ['remote', 'get-url', 'origin']);
const tmp = mkdtempSync(join(tmpdir(), 'gh-pages-'));
try {
  cpSync('dist', tmp, { recursive: true });
  writeFileSync(join(tmp, '.nojekyll'), '');
  if (process.env.CNAME) writeFileSync(join(tmp, 'CNAME'), `${process.env.CNAME}\n`);
  run('git', ['init', '-q', '-b', 'gh-pages'], tmp);
  run('git', ['add', '-A'], tmp);
  run('git', ['-c', 'user.name=patsehart-deploy', '-c', 'user.email=deploy@patsehart.com', 'commit', '-q', '-m', 'Publicar web'], tmp);
  run('git', ['-c', 'credential.helper=', '-c', 'credential.helper=!gh auth git-credential', 'push', '-f', remote, 'gh-pages'], tmp);
  console.log('Publicado en la rama gh-pages.');
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
