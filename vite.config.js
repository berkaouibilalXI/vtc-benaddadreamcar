import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  // Pré-rendu statique (vite-react-ssg) : une page HTML par route de src/routes.jsx
  ssgOptions: {
    dirStyle: 'nested', // /en -> dist/en/index.html
    script: 'async',
    formatting: 'minify',
    // react-helmet injecte les balises SEO en tout début de <head> : on remet
    // <meta charset> en première position (il doit figurer dans les 1024 premiers octets).
    onPageRendered(_route, html) {
      const charset = html.match(/<meta charset="UTF-8"\s*\/?>/i)?.[0]
      if (!charset) return html
      return html.replace(charset, '').replace(/<head([^>]*)>/i, `<head$1>${charset}`)
    },
  },
})
