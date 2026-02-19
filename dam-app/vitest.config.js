import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    // Usar jsdom para simulation del DOM del navegador
    environment: 'jsdom',
    
    // Cargar configuración de setup antes de los tests
    setupFiles: './vitest.setup.js',
    
    // Incluir automáticamente funciones de testing globales (describe, it, etc.)
    globals: true,
    
    // Mostrar cobertura en la consola
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/__tests__/',
      ],
    },
  },
})
