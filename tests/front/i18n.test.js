import { describe, test, expect } from 'vitest'
import { t, i18n } from '../../frontend/src/locales/i18n'

describe('i18n - Internacionalización', () => {
  test('debe retornar una traducción válida para claves existentes', () => {
    const result = t('header.title')
    expect(typeof result).toBe('string')
    expect(result.length).toBeGreaterThan(0)
  })

  test('debe retornar la clave cuando la traducción no existe', () => {
    const result = t('nonexistent.key')
    expect(result).toBe('nonexistent.key')
  })

  test('debe mantener el idioma configurado', () => {
    expect(i18n.locale).toBe('es-ES')
  })

  test('debe soportar traducción de claves anidadas', () => {
    const result = t('products.sectionTitle')
    expect(typeof result).toBe('string')
  })

  test('debe permitir reemplazar variables en traducciones', () => {
    const result = t('products.sectionTitle').replace('{category}', 'Juegos')
    expect(result).toContain('Juegos')
  })
})
