import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Cambia la porta se necessario
  },
  build: {
    outDir: 'dist', // Directory di output
  },
});
