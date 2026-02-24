/**
 * Tests para Mock API
 */

import { getCategories, getProductsByCategory, delay, login, register } from '../src/mocks/api'
import { afterEach, vi } from 'vitest'

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
    expect(Array.isArray(categories)).toBe(true)
    expect(categories.length).toBeGreaterThan(0)
  })

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

  test('getProductsByCategory debe retornar un array', async () => {
    const products = await getProductsByCategory(1, { delayMs: 0 })
    expect(Array.isArray(products)).toBe(true)
  })

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

  test('getProductsByCategory debe filtrar productos por categoryId', async () => {
    const categoryId = 1
    const products = await getProductsByCategory(categoryId, { delayMs: 0 })
    products.forEach(product => {
      expect(product.categoryId).toBe(categoryId)
    })
  })

  test('debe retornar array vacío para categoría que no existe', async () => {
    const products = await getProductsByCategory(999, { delayMs: 0 })
    expect(Array.isArray(products)).toBe(true)
    expect(products.length).toBe(0)
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
    expect(Array.isArray(categories)).toBe(true)
    expect(categories.length).toBeGreaterThan(0)
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
    categories.forEach(category => {
      expect(typeof category.id).toBe('number')
      expect(category.id).toBeGreaterThan(0)
    })
  })

  test('login debe enviar credenciales y retornar usuario', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true, user: { email: 'admin@test.com', role: 'admin' } }),
    })

    const user = await login({ email: 'admin@test.com', password: 'admin' })

    expect(user).toEqual({ email: 'admin@test.com', role: 'admin' })
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringMatching(/\/auth\/login$/),
      expect.objectContaining({ method: 'POST', headers: { 'Content-Type': 'application/json' } })
    )
  })

  test('register debe lanzar error con mensaje del backend cuando falla', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: false,
      status: 409,
      json: async () => ({ message: 'El email ya está registrado.' }),
    })

    await expect(
      register({ email: 'dup@test.com', password: 'secret123', name: 'Dup' })
    ).rejects.toThrow('El email ya está registrado.')
  })
})
