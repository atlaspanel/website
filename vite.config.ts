import { defineConfig } from 'vite'

export default defineConfig({
  base: '/website/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})