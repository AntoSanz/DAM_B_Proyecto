// HistoryDm.js
// Data manager para historial de pedidos (frontend)

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

async function fetchJson(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status} al consultar ${url}`)
  }
  return response.json()
}

/**
 * Obtiene el historial de pedidos de un usuario por su ID
 * @param {number|string} userId
 * @returns {Promise<Array>}
 */
export async function getHistoryByUserId(userId) {
  return fetchJson(`${API_BASE_URL}/history-orders/user/${userId}`)
}

/**
 * Obtiene todos los pedidos del historial (admin)
 * @returns {Promise<Array>}
 */
export async function getAllHistory() {
  return fetchJson(`${API_BASE_URL}/history-orders`)
}

export default {
  getHistoryByUserId,
  getAllHistory,
}
