import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  // Relative Pfade, damit die App auch unter github.io/<repo>/ läuft
  base: './',
  server: { port: 5174, host: true },
  // three.js steckt im Hauptpaket – der Globus ist die Startseite
  build: { chunkSizeWarningLimit: 900 },
  define: { __APP_VERSION__: JSON.stringify(process.env.npm_package_version ?? '0.1.0') },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon-180x180.png', 'logo.svg'],
      manifest: {
        name: 'Gaia Historia',
        short_name: 'Gaia',
        description: 'Die Geschichte der Erde auf einem 3D-Globus – von der Entstehung bis heute.',
        lang: 'de',
        theme_color: '#06080d',
        background_color: '#06080d',
        display: 'standalone',
        orientation: 'any',
        start_url: './',
        scope: './',
        icons: [
          { src: 'pwa-64x64.png', sizes: '64x64', type: 'image/png' },
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'maskable-icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        // Datenpakete nicht vorab laden, sondern beim ersten Öffnen zwischenspeichern
        globIgnores: ['data/**'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === self.location.origin && url.pathname.includes('/data/'),
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'gaia-data', expiration: { maxEntries: 40 } },
          },
        ],
      },
    }),
  ],
});
