import { defineConfig } from 'vite'

export default defineConfig({
  // Base path for the project - change it if deploying to a subdirectory
  base: './',
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
