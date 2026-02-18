import categories from './categories.json'
import boardGames from './products/boardGames.json'
import pcGames from './products/pcGames.json'
import xboxGames from './products/xboxGames.json'
import nintendoGames from './products/nintendoGames.json'
import ps5Games from './products/ps5Games.json'

// Simula latencia de red (ms)
const DEFAULT_DELAY = 300

// Mapeo de categoría a archivo de productos
const categoryProductsMap = {
  1: boardGames,
  2: pcGames,
  3: xboxGames,
  4: nintendoGames,
  5: ps5Games
}

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms))
}

export async function getCategories({ delayMs = DEFAULT_DELAY } = {}) {
  await delay(delayMs)
  return categories
}

export async function getProductsByCategory(categoryId, { delayMs = DEFAULT_DELAY } = {}) {
  await delay(delayMs)
  // Retorna los productos de la categoría del JSON correspondiente
  return categoryProductsMap[categoryId] || []
}

export default {
  getCategories,
  getProductsByCategory
}
