import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const audiences = JSON.parse(
  readFileSync(join(root, 'src/data/audiences.json'), 'utf8'),
);

const base = 'https://gotti0.github.io/engineering-showcase/p';

for (const a of audiences) {
  console.log(`${a.company}\t${a.role}\t${base}/${a.token}/`);
}
