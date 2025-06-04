// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // We'll handle base styles manually
    }),
  ],
  output: 'static',
  site: 'https://yourusername.github.io', // Update this with your actual GitHub Pages URL
  base: '/about', // Update this with your repository name if needed
  build: {
    assets: 'assets'
  },
  vite: {
    css: {
      devSourcemap: true
    }
  }
});
