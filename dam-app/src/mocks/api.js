/**
 * API Mock - Simula respuestas de un servidor backend
 * 
 * Este archivo contiene funciones que simulan llamadas a una API backend.
 * Incluye latencia artificial para simular el comportamiento real de una red.
 * 
 * Cuando la aplicación crezca, estas funciones podrán ser reemplazadas
 * por llamadas reales a una API REST o GraphQL sin cambiar el resto del código.
 */

// Importa todas las categorías disponibles
import categories from './categories.json'

// Importa productos de cada categoría (uno por archivo)
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
const DEFAULT_DELAY = 300

/**
 * Mapeo de categoría a archivo de productos
 * Relaciona cada categoría (por ID) con su archivo JSON de productos
 * Ejemplo: Cuando el usuario selecciona categoría 1, obtenemos boardGames
 */
const categoryProductsMap = {
  1: boardGames,    // Juegos de mesa
  2: pcGames,       // Juegos PC
  3: xboxGames,     // Juegos Xbox
  4: nintendoGames, // Juegos Nintendo
  5: ps5Games       // Juegos PS5
}

/**
 * Función auxiliar que crea una demora
 * Retorna una Promise que se resuelve después de ms milisegundos
 * 
 * Uso: await delay(1000) espera 1 segundo
 */
function delay(ms) {
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
  return categories
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
  // Retorna los productos de la categoría o un array vacío si la categoría no existe
  return categoryProductsMap[categoryId] || []
}

// Exporta las funciones como default para facilitar importaciones
export default {
  getCategories,
  getProductsByCategory
}

