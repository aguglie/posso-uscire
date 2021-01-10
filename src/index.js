import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import App from './App'
import { LanguageProvider } from './components/LanguageProvider'
import theme from './components/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>,

  // eslint-disable-next-line no-undef
  document.querySelector('#root'),
)
