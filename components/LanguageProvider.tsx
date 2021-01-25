import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";
import PropTypes from "prop-types";

const defaultLanguage = "it";

const LanguageContext = createContext<[string, (lang: string) => void]>([
  defaultLanguage,
  () => null,
]);

export function LanguageProvider({ children }): ReactElement {
  const [language, setLanguage] = useState(defaultLanguage);

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
}
LanguageProvider.propTypes = {
  children: PropTypes.element,
};

export function useLanguage() {
  return useContext(LanguageContext);
}
