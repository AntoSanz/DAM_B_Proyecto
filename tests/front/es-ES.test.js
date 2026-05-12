import { describe, test, expect } from 'vitest'

describe('es-ES Locales', () => {
  test('debe poder cargar las traducciones en español', async () => {
    const esES = await import('../../frontend/src/locales/es-ES.js')
    expect(esES.default).toBeDefined()
  })

  test('debe ser un objeto con estructura de traducciones', async () => {
    const esES = await import('../../frontend/src/locales/es-ES.js')
    expect(typeof esES.default).toBe('object')
    expect(typeof esES.default.nav).toBe('object')
  })

  test('debe contener claves y valores esperados', async () => {
    const esES = await import('../../frontend/src/locales/es-ES.js')
    const translations = esES.default
    expect(translations.nav.login).toBe('Iniciar sesión')
    expect(translations.products.addToCart).toBe('Añadir al carrito')
    expect(translations.historial.title).toBe('Historial de pedidos')
  })
})
