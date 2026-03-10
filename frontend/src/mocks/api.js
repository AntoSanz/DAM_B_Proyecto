/**
 * Capa de API - consume el backend Express
 */

import categoriesMock from './categories.json'
import boardGames from './products/boardGames.json'
import pcGames from './products/pcGames.json'
import xboxGames from './products/xboxGames.json'
import nintendoGames from './products/nintendoGames.json'
import ps5Games from './products/ps5Games.json'

/**
 * Latencia simulada (en milisegundos)
 * Simula el tiempo que tardaría una solicitud real al servidor
 * Útil para testing de estados de carga (spinners, etc.)
 */
const DEFAULT_DELAY = 0
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'
const USE_LOCAL_MOCKS =
  import.meta.env.MODE === 'test' ||
  import.meta.env.VITE_USE_API_MOCKS === 'true'

const categoryProductsMap = {
  1: boardGames,
  2: pcGames,
  3: xboxGames,
  4: nintendoGames,
  5: ps5Games,
}

function normalizeCategory(category) {
  return {
    id: Number(category.id),
    name: String(category.name ?? ''),
    description: String(category.description ?? ''),
  }
}

function normalizeProduct(product) {
  return {
    id: Number(product.id),
    categoryId: Number(product.categoryId),
    name: String(product.name ?? ''),
    shortDescription: String(product.shortDescription ?? ''),
    longDescription: String(product.longDescription ?? ''),
    price: Number(product.price ?? 0),
    image: String(product.image ?? ''),
    genre: product.genre ?? null,
    developer: product.developer ?? null,
    players: product.players ?? null,
    releaseDate: product.releaseDate ?? null,
    inStock: Boolean(product.inStock),
    rating: product.rating ?? null,
  }
}

async function fetchJson(url) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status} al consultar ${url}`)
  }

  return response.json()
}

async function postJson(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const body = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(body.message || `Error HTTP ${response.status} al consultar ${url}`)
  }

  return body
}

/**
 * Función auxiliar que crea una demora
 * Retorna una Promise que se resuelve después de ms milisegundos
 * 
 * Uso: await delay(1000) espera 1 segundo
 */
export function delay(ms = DEFAULT_DELAY) {
  return new Promise((res) => setTimeout(res, ms))
}

/**
 * Obtiene todas las categorías disponibles
 * 
 * @param {Object} options - Configuración opcional
 * @param {number} options.delayMs - Latencia personalizada (por defecto: DEFAULT_DELAY)
 * @returns {Promise<Array>} - Array de categorías después de la latencia
 */
export async function getCategories({ delayMs = DEFAULT_DELAY } = {}) {
  await delay(delayMs)

  if (USE_LOCAL_MOCKS) {
    return categoriesMock.map(normalizeCategory)
  }

  const response = await fetchJson(`${API_BASE_URL}/categories`)
  return response.map(normalizeCategory)
}

/**
 * Obtiene los productos de una categoría específica
 * Simula un filtrado del servidor
 * 
 * @param {number} categoryId - ID de la categoría (1-5)
 * @param {Object} options - Configuración opcional
 * @param {number} options.delayMs - Latencia personalizada (por defecto: DEFAULT_DELAY)
 * @returns {Promise<Array>} - Array de productos de esa categoría o array vacío si no existe
 */
export async function getProductsByCategory(categoryId, { delayMs = DEFAULT_DELAY } = {}) {
  await delay(delayMs)

  if (USE_LOCAL_MOCKS) {
    const products = categoryProductsMap[Number(categoryId)] || []
    return products.map(normalizeProduct)
  }

  const response = await fetchJson(`${API_BASE_URL}/categories/${categoryId}/products`)
  return response.map(normalizeProduct)
}

export async function login({ email, password }) {
  const response = await postJson(`${API_BASE_URL}/auth/login`, {
    email,
    password,
  })

  return response.user
}

export async function register({ email, password, name }) {
  const response = await postJson(`${API_BASE_URL}/auth/register`, {
    email,
    password,
    name,
  })

  return response.user
}

// Exporta las funciones como default para facilitar importaciones
export default {
  delay,
  getCategories,
  getProductsByCategory,
  login,
  register,
}

