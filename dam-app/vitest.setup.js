/**
 * vitest.setup.js
 * 
 * Archivo de configuración de setup para Vitest.
 * Se ejecuta antes de cada archivo de test.
 * 
 * Aquí registramos:
 * - Matchers personalizados de Testing Library
 * - Mocks globales para objetosNavigador
 */

import '@testing-library/jest-dom'

/**
 * Mock la función window.matchMedia
 * Usada por componentes responsive para detectar tamaño de pantalla
 */
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // Deprecated
    removeListener: () => {}, // Deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
})
