import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
if (args.length !== 2 || args[0] !== '--project') {
  console.error('Usage: node scripts/install.mjs --project /absolute/path/to/project');
  process.exit(1);
}
const project = path.resolve(args[1]);
if (!fs.statSync(project).isDirectory()) throw new Error(`Not a project directory: ${project}`);
const source = fileURLToPath(new URL('../skills/htyf-migration/', import.meta.url));
const destination = path.join(project, '.agents/skills/htyf-migration');
// Refuse both existing installations and dangling links to preserve local edits.
if (fs.existsSync(destination) || (() => { try { fs.lstatSync(destination); return true; } catch { return false; } })()) {
  throw new Error(`Skill already exists: ${destination}. Review and back up your installation before replacing it.`);
}
fs.mkdirSync(path.dirname(destination), { recursive: true });
fs.cpSync(source, destination, { recursive: true, errorOnExist: true, force: false });
console.log(`Installed htyf-migration: ${destination}`);
console.log('Open a new agent session in the project to load the skill.');
