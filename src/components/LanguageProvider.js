import PropTypes from 'prop-types'
import React, { createContext, useContext, useState } from 'react'

const supportedLanguages = ['it', 'en']
const defaultLanguage = 'en'

function getLocale() {
  if (window.navigator.languages) {
    return window.navigator.languages[0]
  }
  return window.navigator.userLanguage || window.navigator.language
}

export function getLanguage() {
  const locale = getLocale()
  const language = locale.substr(0, 2)

  if (supportedLanguages.includes(language)) {
    return language
  }
  return defaultLanguage
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getLanguage())

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  )
}
LanguageProvider.propTypes = {
  children: PropTypes.object,
}

export function withLanguage() {
  return useContext(LanguageContext)
}
