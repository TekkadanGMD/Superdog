import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  // Base path for the project - change it if deploying to a subdirectory
  base: './',
  plugins: [
    ViteImageOptimizer({
      avif: {
        quality: 60,
      },
      webp: {
        quality: 60,
      },
      jpeg: {
        quality: 60,
      },
      jpg: {
        quality: 60,
      },
      png: {
        quality: 60,
      },
    }),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure that assets are copied correctly
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true
  }
})
