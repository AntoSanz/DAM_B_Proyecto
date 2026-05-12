/**
 * Tests para Mock API
 */

import { getCategories, getProductsByCategory, delay, login, register } from '../../frontend/src/mocks/api'
import { afterEach, vi } from 'vitest'
import { mockFetchError, mockFetchSuccess } from '../../frontend/tests/mocks/fetch.mock'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Mock API', () => {
  test('delay debe esperar el tiempo especificado', async () => {
    const startTime = Date.now()
    await delay(100)
    const endTime = Date.now()
    expect(endTime - startTime).toBeGreaterThanOrEqual(90)
  })

  test('getCategories debe retornar un array de categorías', async () => {
    const categories = await getCategories({ delayMs: 0 })
    expect({ isArray: Array.isArray(categories), hasData: categories.length > 0 }).toEqual({
      isArray: true,
      hasData: true,
    })
  })

  test('cada categoría debe tener id, name y description', async () => {
    const categories = await getCategories({ delayMs: 0 })
    const isValidShape = categories.every((category) => (
      Object.prototype.hasOwnProperty.call(category, 'id')
      && Object.prototype.hasOwnProperty.call(category, 'name')
      && Object.prototype.hasOwnProperty.call(category, 'description')
      && typeof category.id === 'number'
      && typeof category.name === 'string'
      && typeof category.description === 'string'
    ))
    expect(isValidShape).toBe(true)
  })

  test('getProductsByCategory debe retornar un array', async () => {
    const products = await getProductsByCategory(1, { delayMs: 0 })
    expect(Array.isArray(products)).toBe(true)
  })

  test('cada producto debe tener propiedades requeridas', async () => {
    const products = await getProductsByCategory(1, { delayMs: 0 })
    const isValidShape = products.length === 0 || products.every((product) => (
      Object.prototype.hasOwnProperty.call(product, 'id')
      && Object.prototype.hasOwnProperty.call(product, 'categoryId')
      && Object.prototype.hasOwnProperty.call(product, 'name')
      && Object.prototype.hasOwnProperty.call(product, 'shortDescription')
      && Object.prototype.hasOwnProperty.call(product, 'longDescription')
      && Object.prototype.hasOwnProperty.call(product, 'price')
      && Object.prototype.hasOwnProperty.call(product, 'image')
    ))
    expect(isValidShape).toBe(true)
  })
})
