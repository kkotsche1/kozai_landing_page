import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production builds ship prerendered markup (see scripts/prerender.mjs), so
// attach to it rather than throwing it away. `vite dev` serves an empty shell.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
