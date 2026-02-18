import es from './es-ES'

const translations = {
  'es-ES': es
}

let currentLocale = 'es-ES'

export function setLocale(locale) {
  // Only 'es-ES' is supported
  if (translations[locale]) currentLocale = locale
}

export function t(key) {
  const parts = key.split('.')
  let node = translations[currentLocale]
  for (const p of parts) {
    node = node?.[p]
    if (node === undefined) break
  }
  return node ?? key
}

export default translations
