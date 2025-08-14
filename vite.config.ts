import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    // Optimización de chunks
    rollupOptions: {
      output: {
        manualChunks: {
          'gsap': ['gsap'],
          'scroll-trigger': ['gsap/ScrollTrigger'],
          'vendor': ['react', 'react-dom']
        },
        // Optimización de nombres de archivos
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // Compresión de assets
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      }
    },
    // Optimización de CSS
    cssCodeSplit: true,
    // Optimización de assets
    assetsInlineLimit: 4096, // 4KB
    // Optimización de source maps
    sourcemap: false
  },
  // Optimización de desarrollo
  server: {
    hmr: {
      overlay: false
    }
  },
  // Optimización de plugins
  plugins: [],
  // Resolución de alias para mejor rendimiento
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@sections': resolve(__dirname, 'src/sections'),
      '@layouts': resolve(__dirname, 'src/layouts'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@lib': resolve(__dirname, 'src/lib')
    }
  },
  // Optimización de CSS
  css: {
    devSourcemap: false,
    postcss: {
      plugins: [
        // Agregar autoprefixer para mejor compatibilidad
        require('autoprefixer')
      ]
    }
  }
});
