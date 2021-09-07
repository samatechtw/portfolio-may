import path from 'path';
import Vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import ViteImages from 'vite-plugin-vue-images';

export default defineConfig({
  plugins: [Vue(), Components(), ViteImages()],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './src')}/`,
    },
  },
});
