import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function sitemapPlugin({ url }) {
  return {
    name: 'generate-sitemap',
    apply: 'build',
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10)
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${url}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: xml })
    },
  }
}

export default defineConfig({
  plugins: [react(), sitemapPlugin({ url: 'https://stephengineer.github.io' })],
  base: '/',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
