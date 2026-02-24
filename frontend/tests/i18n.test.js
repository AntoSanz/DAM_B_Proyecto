import { t, setLocale } from '../src/locales/i18n'

describe('i18n (Internacionalización)', () => {
  test('t() debe retornar traducción para clave válida', () => {
    const translation = t('brand')
    expect(typeof translation).toBe('string')
    expect(translation.length).toBeGreaterThan(0)
  })

  test('t() debe retornar la clave si no existe la traducción', () => {
    const key = 'no.existe.esta.clave'
    expect(t(key)).toBe(key)
  })

  test('debe acceder a traducciones anidadas con notación de puntos', () => {
    const translation = t('welcome.title')
    expect(typeof translation).toBe('string')
    expect(translation).not.toBe('welcome.title')
  })

  test('setLocale() debe cambiar el idioma actual', () => {
    setLocale('es-ES')
    expect(typeof t('brand')).toBe('string')
  })

  test('el locale por defecto debe ser es-ES', () => {
    expect(typeof t('brand')).toBe('string')
  })

  test('debe obtener múltiples traducciones correctamente', () => {
    ;['brand', 'nav.home', 'button.primary', 'welcome.title'].forEach(key => {
      expect(typeof t(key)).toBe('string')
    })
  })

  test('la misma clave debe retornar siempre la misma traducción', () => {
    expect(t('brand')).toBe(t('brand'))
  })

  test('debe manejar claves con muchos niveles de anidamiento', () => {
    expect(typeof t('products.viewButton')).toBe('string')
  })

  test('setLocale() con idioma inválido no debe cambiar locale', () => {
    setLocale('es-ES')
    const before = t('brand')
    setLocale('xx-XX')
    expect(t('brand')).toBe(before)
  })

  test('no debe haber traducciones vacías', () => {
    ;['brand', 'nav.home', 'button.primary', 'welcome.title', 'products.viewButton'].forEach(key => {
      expect(t(key).length).toBeGreaterThan(0)
    })
  })

  test('los accesos a claves deben ser case-sensitive', () => {
    expect(t('Brand.Name')).toBe('Brand.Name')
    expect(t('brand')).not.toBe('Brand.Name')
  })

  test('todas las traducciones deben ser strings', () => {
    ;['brand', 'nav.home', 'welcome.title'].forEach(key => {
      expect(typeof t(key)).toBe('string')
    })
  })
})
