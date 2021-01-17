import PropTypes from 'prop-types'
import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('it')

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
