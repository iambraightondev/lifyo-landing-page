import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '127.0.0.1', // fuerza IPv4
    port: 3000,        // evita 5173
    strictPort: true,  // si está ocupado, falla y te avisa
  },
});
