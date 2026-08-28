import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Build-time only. `scripts/prerender.mjs` calls this to produce the markup
// that gets baked into dist/index.html, so crawlers that do not execute
// JavaScript still see the page content and the outbound product links.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
