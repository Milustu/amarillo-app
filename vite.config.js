import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base relativa: la app funciona en la raíz de Vercel o dentro de cualquier carpeta.
export default defineConfig({
  plugins: [react()],
  base: './',
});
