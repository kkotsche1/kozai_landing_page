/**
 * Bakes the app's server-rendered markup into dist/index.html.
 *
 * The site is a single static route, so a full SSG framework is overkill:
 * `vite build --ssr` emits a Node-loadable build of `src/entry-server.jsx`,
 * we render it once, and splice the result into the client build's shell.
 * The client then hydrates that markup instead of rendering from empty.
 *
 * Without this, the SteadyTails links and all of the page copy exist only
 * after React mounts, so HTML-only crawlers and backlink indexes see a
 * blank <div id="root">.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const templatePath = resolve(root, 'dist/index.html');
const entryPath = resolve(root, 'dist-ssr/entry-server.js');
const PLACEHOLDER = '<div id="root"></div>';

for (const [label, path] of [['client build', templatePath], ['SSR build', entryPath]]) {
  if (!existsSync(path)) {
    throw new Error(`prerender: missing ${label} at ${path} — run the full build script.`);
  }
}

const template = readFileSync(templatePath, 'utf8');
if (!template.includes(PLACEHOLDER)) {
  throw new Error(
    `prerender: could not find ${PLACEHOLDER} in dist/index.html. ` +
      'If the mount point in index.html changed, update PLACEHOLDER to match.',
  );
}

const { render } = await import(pathToFileURL(entryPath).href);
const html = render();

if (!html.trim()) {
  throw new Error('prerender: render() returned empty markup.');
}

writeFileSync(
  templatePath,
  template.replace(PLACEHOLDER, `<div id="root">${html}</div>`),
  'utf8',
);

console.log(`prerender: inlined ${html.length} chars into dist/index.html`);
