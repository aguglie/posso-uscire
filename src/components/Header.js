import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { withLanguage } from './LanguageProvider'

const useStyles = makeStyles((theme) => ({
  subTitle: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(1),
  },
}))

const i18n = {
  MAY_I_EXIT: {
    'it': 'Posso uscire?',
    'en': 'Can I get out?',
  },
  INSERT_CITY: {
    'it': 'Inserisci la tua provincia per conoscere le restrizioni.',
    'en': 'Enter your city to know the restrictions.',
  },
}

export default function Header() {
  const classes = useStyles()
  const [language] = withLanguage()

  return (
    <>
      <Typography gutterBottom>
        <Box textAlign="center" fontSize="h3.fontSize" fontFamily="Roboto" m={1}>
          {i18n.MAY_I_EXIT[language]}
        </Box>
      </Typography>

      <Typography className={classes.subTitle} color="textPrimary">
        <Box textAlign="left" fontSize={20}>
          {i18n.INSERT_CITY[language]}
        </Box>
      </Typography>
    </>
  )
}
