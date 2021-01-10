import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import React from 'react'
import { withLanguage } from './LanguageProvider'

const useStyles = makeStyles((theme) => ({
  copyrightBox: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(5),
  },
  contributeBox: {
    marginTop: theme.spacing(0.4),
  },
  changeLanguageBox: {
    marginTop: theme.spacing(0.4),
  },
}))

const i18n = {
  DISCLAIMER_1: {
    'it': 'Le informazioni fornite potrebbero essere incomplete o non corrette.',
    'en': 'The information provided may be incomplete or incorrect.',
  },
  DISCLAIMER_2: {
    'it': 'Attenersi sempre a fonti governative ufficiali.',
    'en': 'Always stick to official government sources.',
  },
  CONTRIBUTE: {
    'it': 'Contribuisci al progetto su Github',
    'en': 'Contribute on Github',
  },
}

export default function Footer() {
  const classes = useStyles()
  const [language, setLanguage] = withLanguage()

  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.copyrightBox} >
      <Box>
        {i18n.DISCLAIMER_1[language]}
      </Box>
      <Box>
        {i18n.DISCLAIMER_2[language]}
      </Box>

      <Box className={classes.contributeBox}>
        <Link href="http://github.com/Guglio95/posso-uscire">
          {i18n.CONTRIBUTE[language]}
        </Link>
      </Box>

      <Box className={classes.changeLanguageBox} onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}>
        {language === 'it' ? 'Switch to English 🇩🇬' : 'Passa all\' Italiano 🇮🇹'}
      </Box>
    </Typography>
  )
}
