import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // generate gz and brotli compressed assets for CDN / static hosting
    compression({ algorithm: 'gzip' }),
    compression({ algorithm: 'brotliCompress' }),
    visualizer({ filename: 'dist/bundle-stats.html', gzipSize: true, brotliSize: true }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('motion') || id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('react-helmet-async')) {
              return 'vendor-helmet';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            }
          }
        },
      },
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
