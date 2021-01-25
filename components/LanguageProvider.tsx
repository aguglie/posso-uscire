import React, { createContext, useContext, useEffect, useState } from 'react'

const supportedLanguages = ['it', 'en']
const defaultLanguage = 'it'

function getLocale() {
  if (window.navigator.languages) {
    return window.navigator.languages[0]
  }
  return (window.navigator as any).userLanguage || window.navigator.language
}

export function getLanguage() {
  const locale = getLocale()
  const language = locale.substr(0, 2)

  if (supportedLanguages.includes(language)) {
    return language
  }
  return defaultLanguage
}

const LanguageContext = createContext<[string, (lang: string) => void]>([defaultLanguage, () => null])

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(defaultLanguage);
  useEffect(() => {
    setLanguage(getLanguage());
  }, [])
  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  )
}


export function useLanguage() {
  return useContext(LanguageContext);
}
