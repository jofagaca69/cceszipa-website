// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

import htaccessIntegration from 'astro-htaccess';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimización de chunks
      rollupOptions: {
        output: {
          manualChunks: {
            'gsap': ['gsap'],
            'scroll-trigger': ['gsap/ScrollTrigger']
          }
        }
      },
      // Compresión de assets
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    // Optimización de CSS
    css: {
      devSourcemap: false
    }
  },
  site: 'https://colexploradoresdelsaber.com',
  integrations: [
      sitemap(),
      robotsTxt(),
      htaccessIntegration(
          {
              errorPages: [{ code: 404, document: "/404" }],
              // Configuración de caché para mejorar rendimiento
              cacheControl: [
                  {
                      pattern: '**/*.{js,css,woff2,svg}',
                      headers: {
                          'Cache-Control': 'public, max-age=31536000, immutable'
                      }
                  },
                  {
                      pattern: '**/*.{jpg,jpeg,png,webp,avif}',
                      headers: {
                          'Cache-Control': 'public, max-age=31536000, immutable'
                      }
                  },
                  {
                      pattern: '**/*.{html,astro}',
                      headers: {
                          'Cache-Control': 'public, max-age=3600'
                      }
                  }
              ]
          }
      )
  ],
  // Optimización de build
  build: {
    inlineStylesheets: 'auto'
  },
  // Optimización de assets
  assets: '_astro'
});