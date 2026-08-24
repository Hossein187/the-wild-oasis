import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    open: true,
  },
  plugins: [
    react(),
    eslint({
      emitErrorAsWarning: true,
      cache: true,
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: ['node_modules', 'dist'],
      fix: false,
      formatter: 'stylish',
      cacheLocation: path.resolve(__dirname, '.eslintcache'),
      cacheStrategy: 'content',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
