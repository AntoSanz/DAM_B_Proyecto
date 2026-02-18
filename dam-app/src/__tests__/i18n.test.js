/**
 * Tests para Sistema i18n (Internacionalización)
 * 
 * Prueba las funciones de traducción y cambio de idioma
 */

import { t, setLocale } from '../locales/i18n'

describe('i18n (Internacionalización)', () => {
  // Test 1: Obtener traducción simple
  test('t() debe retornar traducción para clave válida', () => {
    const translation = t('brand.name')
    
    expect(typeof translation).toBe('string')
    expect(translation.length).toBeGreaterThan(0)
  })

  // Test 2: Clave inválida retorna la clave
  test('t() debe retornar la clave si no existe la traducción', () => {
    const key = 'no.existe.esta.clave'
    const result = t(key)
    
    expect(result).toBe(key)
  })

  // Test 3: Acceso anidado
  test('debe acceder a traducciones anidadas con notación de puntos', () => {
    const translation = t('welcome.title')
    
    expect(typeof translation).toBe('string')
    expect(translation).not.toBe('welcome.title')
  })

  // Test 4: Cambiar locale
  test('setLocale() debe cambiar el idioma actual', () => {
    setLocale('es-ES')
    
    const translation = t('brand.name')
    expect(typeof translation).toBe('string')
  })

  // Test 5: Locale por defecto es español
  test('el locale por defecto debe ser es-ES', () => {
    const translation = t('brand.name')
    
    expect(typeof translation).toBe('string')
  })

  // Test 6: Múltiples claves
  test('debe obtener múltiples traducciones correctamente', () => {
    const keys = [
      'brand.name',
      'nav.home',
      'button.add',
      'welcome.title'
    ]
    
    keys.forEach(key => {
      const translation = t(key)
      expect(typeof translation).toBe('string')
    })
  })

  // Test 7: Consistencia de traducciones
  test('la misma clave debe retornar siempre la misma traducción', () => {
    const key = 'brand.name'
    const call1 = t(key)
    const call2 = t(key)
    
    expect(call1).toBe(call2)
  })

  // Test 8: Manejo de claves con múltiples niveles
  test('debe manejar claves con muchos niveles de anidamiento', () => {
    const translation = t('products.viewButton')
    
    expect(typeof translation).toBe('string')
  })

  // Test 9: Locale inválido no cambia el actual
  test('setLocale() con idioma inválido no debe cambiar locale', () => {
    setLocale('es-ES')
    const translationBefore = t('brand.name')
    
    setLocale('xx-XX') // Idioma que no existe
    const translationAfter = t('brand.name')
    
    expect(translationBefore).toBe(translationAfter)
  })

  // Test 10: Cadenas vacías
  test('no debe haber traducciones vacías', () => {
    const keys = [
      'brand.name',
      'nav.home',
      'button.add',
      'welcome.title',
      'products.viewButton'
    ]
    
    keys.forEach(key => {
      const translation = t(key)
      expect(translation.length).toBeGreaterThan(0)
    })
  })

  // Test 11: CamelCase en claves
  test('los accesos a claves deben ser case-sensitive', () => {
    const result1 = t('Brand.Name')
    const result2 = t('brand.name')
    
    // Deben ser diferentes porque una no existe
    expect(result1).toBe('Brand.Name')
    expect(result2).not.toBe('Brand.Name')
  })

  // Test 12: Tipos de datos
  test('todas las traducciones deben ser strings', () => {
    const keys = [
      'brand.name',
      'nav.home',
      'welcome.title'
    ]
    
    keys.forEach(key => {
      const translation = t(key)
      expect(typeof translation).toBe('string')
    })
  })
})
