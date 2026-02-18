import React, { createContext, useState } from 'react'
import translations from './i18n'
import { setLocale as setLocaleModule } from './i18n'

const LocaleContext = createContext({ locale: 'es-ES', setLocale: () => {}, t: (k) => k })

export function LocaleProvider({ children, defaultLocale = 'es-ES' }) {
  const [locale, setLocaleState] = useState(defaultLocale)

  function setLocale(localeKey) {
    if (translations[localeKey]) {
      setLocaleModule(localeKey)
      setLocaleState(localeKey)
    }
  }

  function t(key) {
    const parts = key.split('.')
    let node = translations[locale]
    for (const p of parts) {
      node = node?.[p]
      if (node === undefined) break
    }
    return node ?? key
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider
