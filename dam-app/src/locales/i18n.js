/**
 * Sistema de Internacionalización (i18n) - Gestiona traducciones
 * 
 * Permite mostrar la interfaz en diferentes idiomas sin hardcodear textos.
 * Actualmente soporta: español (es-ES)
 * 
 * Uso en componentes:
 * import { t } from '../locales/i18n'
 * <h1>{t('welcome.title')}</h1>
 */

// Importa las traducciones al español
import es from './es-ES'

/**
 * Objeto con todas las traducciones disponibles
 * Clave: código de idioma (ej: 'es-ES', 'en-US', 'fr-FR', etc.)
 * Valor: objeto con las traducciones de ese idioma
 */
const translations = {
  'es-ES': es
  // Futuro: 'en-US': en, 'fr-FR': fr, etc.
}

/**
 * Variable que almacena el idioma actual
 * Por defecto: español
 */
let currentLocale = 'es-ES'

/**
 * Cambia el idioma/locale actual
 * 
 * @param {string} locale - Código de idioma (ej: 'es-ES', 'en-US')
 * 
 * Ejemplo:
 * setLocale('en-US')  // Cambia a inglés
 * setLocale('es-ES')  // Cambia a español
 */
export function setLocale(locale) {
  // Solo cambia si el idioma existe en las traducciones disponibles
  if (translations[locale]) {
    currentLocale = locale
  }
}

/**
 * Obtiene una traducción por clave (función principal)
 * 
 * @param {string} key - Clave de la traducción usando notación de puntos
 *                       Ejemplos: 'welcome.title', 'products.viewButton', 'breadcrumb.home'
 * @returns {string} - Texto traducido o la clave si no se encuentra
 * 
 * Ejemplo:
 * t('welcome.title')  // Retorna: "Bienvenido"
 * t('no.existe')      // Retorna: "no.existe" (la clave por defecto)
 */
export function t(key) {
  // Divide la clave en partes usando el punto como separador
  // Ejemplo: 'welcome.title' → ['welcome', 'title']
  const parts = key.split('.')
  
  // Comienza en el objeto de traducciones del idioma actual
  let node = translations[currentLocale]
  
  // Navega por cada parte de la clave para acceder a la traducción anidada
  // Ejemplo: translations['es-ES']['welcome']['title']
  for (const p of parts) {
    node = node?.[p]  // Usa optional chaining (?.) para evitar errores
    if (node === undefined) break  // Si no encuentra la clave, detiene
  }
  
  // Retorna la traducción encontrada o la clave original si no existe
  // (?? es el operador nullish coalescing)
  return node ?? key
}

/**
 * Exporta todas las traducciones disponibles
 * Útil para debugging o para trabajar directamente con objetos de traducción
 */
export default translations
