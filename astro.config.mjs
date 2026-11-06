// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Used for canonical URLs, Open Graph URLs and (later) the sitemap.
  site: 'https://shijas.netlify.app',
  // Matches how Netlify serves the directory-style pages Astro builds.
  trailingSlash: 'always',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
