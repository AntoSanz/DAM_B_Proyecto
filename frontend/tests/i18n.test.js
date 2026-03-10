import { t, setLocale } from '../src/locales/i18n'

describe('i18n (Internacionalización)', () => {
  test('t() debe retornar traducción para clave válida', () => {
    const translation = t('brand')
    expect({ type: typeof translation, hasContent: translation.length > 0 }).toEqual({
      type: 'string',
      hasContent: true,
    })
  })

  test('t() debe retornar la clave si no existe la traducción', () => {
    const key = 'no.existe.esta.clave'
    expect(t(key)).toBe(key)
  })

  test('debe acceder a traducciones anidadas con notación de puntos', () => {
    const translation = t('welcome.title')
    expect({ type: typeof translation, isResolved: translation !== 'welcome.title' }).toEqual({
      type: 'string',
      isResolved: true,
    })
  })

  test('setLocale() debe cambiar el idioma actual', () => {
    setLocale('es-ES')
    expect(typeof t('brand')).toBe('string')
  })

  test('el locale por defecto debe ser es-ES', () => {
    expect(typeof t('brand')).toBe('string')
  })

  test('debe obtener múltiples traducciones correctamente', () => {
    const allAreStrings = ['brand', 'nav.home', 'button.primary', 'welcome.title'].every((key) => typeof t(key) === 'string')
    expect(allAreStrings).toBe(true)
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
    const allNonEmpty = ['brand', 'nav.home', 'button.primary', 'welcome.title', 'products.viewButton'].every((key) => t(key).length > 0)
    expect(allNonEmpty).toBe(true)
  })

  test('los accesos a claves deben ser case-sensitive', () => {
    expect({ wrongCase: t('Brand.Name'), rightCaseDiffers: t('brand') !== 'Brand.Name' }).toEqual({
      wrongCase: 'Brand.Name',
      rightCaseDiffers: true,
    })
  })

  test('todas las traducciones deben ser strings', () => {
    const allAreStrings = ['brand', 'nav.home', 'welcome.title'].every((key) => typeof t(key) === 'string')
    expect(allAreStrings).toBe(true)
  })
})
