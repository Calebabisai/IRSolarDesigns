import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    assetsInlineLimit: 0, // Esto evita que las imágenes se conviertan en base64
  },
  resolve: {
    alias: {
      '@assets': '/src/assets', // Crea un alias para la carpeta de assets
    }
  }
});
