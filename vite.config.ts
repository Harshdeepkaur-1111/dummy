import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
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
      cssCodeSplit: true,
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
  };
});
