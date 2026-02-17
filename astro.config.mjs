// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://catherine-mcmillan.com',
  output: 'static',
  adapter: vercel({
    imageService: false, // Astro handles image optimization at build time — skip Vercel's per-request image service
  }),
  integrations: [sitemap()],
});
