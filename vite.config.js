import { defineConfig } from 'vite';

export default defineConfig({
  appType: 'spa',
  server: {
    port: 4173,
    strictPort: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
  test: {
    environment: 'node',
  },
});
