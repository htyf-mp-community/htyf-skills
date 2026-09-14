import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const script = fileURLToPath(new URL('./install.mjs', import.meta.url));
test('installs all migration references and preserves an existing installation', t => {
  const project = fs.mkdtempSync(path.join(os.tmpdir(), 'htyf-skills-test-'));
  t.after(() => fs.rmSync(project, { recursive: true, force: true }));
  const run = () => spawnSync(process.execPath, [script, '--project', project], { encoding: 'utf8' });
  assert.equal(run().status, 0);
  const installed = path.join(project, '.agents/skills/htyf-migration');
  for (const file of ['SKILL.md', 'references/cli-workflow.md', 'references/migration-rules.md', 'agents/openai.yaml']) {
    assert.ok(fs.statSync(path.join(installed, file)).size > 0, file);
  }
  fs.writeFileSync(path.join(installed, 'SKILL.md'), 'local edits');
  assert.notEqual(run().status, 0);
  assert.equal(fs.readFileSync(path.join(installed, 'SKILL.md'), 'utf8'), 'local edits');
});
