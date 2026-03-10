/**
 * Tests para Mock API
 */

import { getCategories, getProductsByCategory, delay, login, register } from '../src/mocks/api'
import { afterEach, vi } from 'vitest'
import { mockFetchError, mockFetchSuccess } from './mocks/fetch.mock'

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
      && Object.prototype.hasOwnProperty.call(product, 'genre')
      && Object.prototype.hasOwnProperty.call(product, 'developer')
      && Object.prototype.hasOwnProperty.call(product, 'players')
      && Object.prototype.hasOwnProperty.call(product, 'releaseDate')
      && Object.prototype.hasOwnProperty.call(product, 'inStock')
      && Object.prototype.hasOwnProperty.call(product, 'rating')
      && typeof product.id === 'number'
      && typeof product.categoryId === 'number'
      && typeof product.name === 'string'
      && typeof product.shortDescription === 'string'
      && typeof product.longDescription === 'string'
      && typeof product.price === 'number'
      && typeof product.image === 'string'
      && typeof product.inStock === 'boolean'
    ))
    expect(isValidShape).toBe(true)
  })

  test('getProductsByCategory debe filtrar productos por categoryId', async () => {
    const categoryId = 1
    const products = await getProductsByCategory(categoryId, { delayMs: 0 })
    expect(products.every((product) => product.categoryId === categoryId)).toBe(true)
  })

  test('debe retornar array vacío para categoría que no existe', async () => {
    const products = await getProductsByCategory(999, { delayMs: 0 })
    expect({ isArray: Array.isArray(products), isEmpty: products.length === 0 }).toEqual({
      isArray: true,
      isEmpty: true,
    })
  })

  test('getCategories debe respetar la latencia especificada', async () => {
    const startTime = Date.now()
    await getCategories({ delayMs: 100 })
    const endTime = Date.now()
    expect(endTime - startTime).toBeGreaterThanOrEqual(90)
  })

  test('getProductsByCategory debe respetar la latencia especificada', async () => {
    const startTime = Date.now()
    await getProductsByCategory(1, { delayMs: 100 })
    const endTime = Date.now()
    expect(endTime - startTime).toBeGreaterThanOrEqual(90)
  })

  test('getCategories debe funcionar con valores por defecto', async () => {
    const categories = await getCategories()
    expect({ isArray: Array.isArray(categories), hasData: categories.length > 0 }).toEqual({
      isArray: true,
      hasData: true,
    })
  })

  test('getCategories debe retornar una promesa', () => {
    const result = getCategories({ delayMs: 0 })
    expect(result instanceof Promise).toBe(true)
  })

  test('getProductsByCategory debe retornar una promesa', () => {
    const result = getProductsByCategory(1, { delayMs: 0 })
    expect(result instanceof Promise).toBe(true)
  })

  test('llamadas múltiples a getCategories deben retornar los mismos datos', async () => {
    const call1 = await getCategories({ delayMs: 0 })
    const call2 = await getCategories({ delayMs: 0 })
    expect(call1).toEqual(call2)
  })

  test('los IDs de categoría deben ser números positivos', async () => {
    const categories = await getCategories({ delayMs: 0 })
    expect(categories.every((category) => typeof category.id === 'number' && category.id > 0)).toBe(true)
  })

  test('login debe enviar credenciales y retornar usuario', async () => {
    const fetchMock = mockFetchSuccess({ ok: true, user: { email: 'admin@test.com', role: 'admin' } })

    const user = await login({ email: 'admin@test.com', password: 'admin' })

    expect({
      user,
      call: fetchMock.mock.calls[0],
    }).toEqual({
      user: { email: 'admin@test.com', role: 'admin' },
      call: [
        expect.stringMatching(/\/auth\/login$/),
        expect.objectContaining({ method: 'POST', headers: { 'Content-Type': 'application/json' } }),
      ],
    })
  })

  test('register debe lanzar error con mensaje del backend cuando falla', async () => {
    mockFetchError({ status: 409, message: 'El email ya está registrado.' })

    await expect(
      register({ email: 'dup@test.com', password: 'secret123', name: 'Dup' })
    ).rejects.toThrow('El email ya está registrado.')
  })
})
