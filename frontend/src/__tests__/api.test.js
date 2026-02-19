/**
 * Tests para Mock API
 * 
 * Prueba que las funciones de API mock funcionen correctamente:
 * - Latencia simulada
 * - Retorno de datos correcto
 * - Filtrado de productos por categoría
 */

import { getCategories, getProductsByCategory, delay } from '../mocks/api'

describe('Mock API', () => {
  // Test 1: Función delay
  test('delay debe esperar el tiempo especificado', async () => {
    const startTime = Date.now()
    await delay(100)
    const endTime = Date.now()
    
    // Debe ser aproximadamente 100ms (dejamos 50ms de margen)
    expect(endTime - startTime).toBeGreaterThanOrEqual(90)
  })

  // Test 2: getCategories retorno
  test('getCategories debe retornar un array de categorías', async () => {
    const categories = await getCategories({ delayMs: 0 })
    
    expect(Array.isArray(categories)).toBe(true)
    expect(categories.length).toBeGreaterThan(0)
  })

  // Test 3: Estructura de categoría
  test('cada categoría debe tener id, name y description', async () => {
    const categories = await getCategories({ delayMs: 0 })
    
    categories.forEach(category => {
      expect(category).toHaveProperty('id')
      expect(category).toHaveProperty('name')
      expect(category).toHaveProperty('description')
      expect(typeof category.id).toBe('number')
      expect(typeof category.name).toBe('string')
      expect(typeof category.description).toBe('string')
    })
  })

  // Test 4: getProductsByCategory retorna array
  test('getProductsByCategory debe retornar un array', async () => {
    const products = await getProductsByCategory(1, { delayMs: 0 })
    
    expect(Array.isArray(products)).toBe(true)
  })

  // Test 5: Estructura de producto
  test('cada producto debe tener propiedades requeridas', async () => {
    const products = await getProductsByCategory(1, { delayMs: 0 })
    
    if (products.length > 0) {
      const product = products[0]
      
      expect(product).toHaveProperty('id')
      expect(product).toHaveProperty('categoryId')
      expect(product).toHaveProperty('name')
      expect(product).toHaveProperty('shortDescription')
      expect(product).toHaveProperty('longDescription')
      expect(product).toHaveProperty('price')
      expect(product).toHaveProperty('image')
      expect(product).toHaveProperty('genre')
      expect(product).toHaveProperty('developer')
      expect(product).toHaveProperty('players')
      expect(product).toHaveProperty('releaseDate')
      expect(product).toHaveProperty('inStock')
      expect(product).toHaveProperty('rating')

      expect(typeof product.id).toBe('number')
      expect(typeof product.categoryId).toBe('number')
      expect(typeof product.name).toBe('string')
      expect(typeof product.shortDescription).toBe('string')
      expect(typeof product.longDescription).toBe('string')
      expect(typeof product.price).toBe('number')
      expect(typeof product.image).toBe('string')
      expect(typeof product.inStock).toBe('boolean')
    }
  })

  // Test 6: Filtrado por categoría
  test('getProductsByCategory debe filtrar productos por categoryId', async () => {
    const categoryId = 1
    const products = await getProductsByCategory(categoryId, { delayMs: 0 })
    
    products.forEach(product => {
      expect(product.categoryId).toBe(categoryId)
    })
  })

  // Test 7: Categoría inexistente
  test('debe retornar array vacío para categoría que no existe', async () => {
    const products = await getProductsByCategory(999, { delayMs: 0 })
    
    expect(Array.isArray(products)).toBe(true)
    expect(products.length).toBe(0)
  })

  // Test 8: Latencia en getCategories
  test('getCategories debe respetar la latencia especificada', async () => {
    const startTime = Date.now()
    await getCategories({ delayMs: 100 })
    const endTime = Date.now()
    
    expect(endTime - startTime).toBeGreaterThanOrEqual(90)
  })

  // Test 9: Latencia en getProductsByCategory
  test('getProductsByCategory debe respetar la latencia especificada', async () => {
    const startTime = Date.now()
    await getProductsByCategory(1, { delayMs: 100 })
    const endTime = Date.now()
    
    expect(endTime - startTime).toBeGreaterThanOrEqual(90)
  })

  // Test 10: Valores por defecto
  test('getCategories debe funcionar con valores por defecto', async () => {
    const categories = await getCategories()

    expect(Array.isArray(categories)).toBe(true)
    expect(categories.length).toBeGreaterThan(0)
  })

  // Test 11: Retorna promesa
  test('getCategories debe retornar una promesa', () => {
    const result = getCategories({ delayMs: 0 })
    
    expect(result instanceof Promise).toBe(true)
  })

  // Test 12: Retorna promesa
  test('getProductsByCategory debe retornar una promesa', () => {
    const result = getProductsByCategory(1, { delayMs: 0 })
    
    expect(result instanceof Promise).toBe(true)
  })

  // Test 13: Datos consistentes
  test('llamadas múltiples a getCategories deben retornar los mismos datos', async () => {
    const call1 = await getCategories({ delayMs: 0 })
    const call2 = await getCategories({ delayMs: 0 })
    
    expect(call1).toEqual(call2)
  })

  // Test 14: IDs de categoría válidos
  test('los IDs de categoría deben ser números positivos', async () => {
    const categories = await getCategories({ delayMs: 0 })
    
    categories.forEach(category => {
      expect(typeof category.id).toBe('number')
      expect(category.id).toBeGreaterThan(0)
    })
  })
})
