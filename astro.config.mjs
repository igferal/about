// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // We'll handle base styles manually
    }),
    sitemap(),
  ],
  output: 'static',
  site: 'https://yourusername.github.io', // Update this with your actual GitHub Pages URL
  base: '/about', // Update this with your repository name if needed
  build: {
    assets: 'assets',
    // Enable inlining of small assets for better performance
    inlineStylesheets: 'auto',
  },
  prefetch: {
    // Enable prefetching for better perceived performance
    prefetchAll: true,
    // Prefetch on viewport entry for better UX
    defaultStrategy: 'viewport',
  },
  compressHTML: true,
  image: {
    // Configure image optimization domains for remote images
    domains: ['images.unsplash.com', 'picsum.photos'],
    // Enable Sharp service for image optimization (default in Astro v5)
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Configure Sharp options for better optimization
        limitInputPixels: false,
        // Enable progressive JPEG for better loading experience
        progressive: true,
        // Set quality defaults
        quality: 80,
        // Enable WebP format for better compression
        formats: ['webp', 'jpeg'],
        // Configure additional optimization options
        mozjpeg: true,
        webp: {
          quality: 80,
          effort: 6,
        },
      }
    },
  },
  vite: {
    css: {
      devSourcemap: true
    },
    // Enable build optimizations
    build: {
      // Minify CSS and JS
      minify: 'terser',
      // Enable gzip compression hints
      reportCompressedSize: true,
      // Optimize chunk sizes for better loading
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          // Optimize asset naming for better caching
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name?.split('.') || [];
            const ext = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
              return `assets/images/[name]-[hash][extname]`;
            } else if (/css/i.test(ext)) {
              return `assets/css/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          // Split vendor chunks for better caching
          manualChunks: {
            vendor: ['react', 'react-dom'],
            utils: ['clsx', 'tailwind-merge'],
          },
        }
      }
    },
    // Optimize dependency handling
    optimizeDeps: {
      include: ['react', 'react-dom'],
      exclude: [],
    },
  }
});
