// @ts-check
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://treeagent.pro',
  integrations: [alpinejs(), sitemap()],
});
