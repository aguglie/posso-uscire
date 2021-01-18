import { makeStyles, Typography, Box, Link } from '@material-ui/core'
import React from 'react'
import { useLanguage } from './LanguageProvider'


export const useFooterStyles = makeStyles((theme) => ({
  copyrightBox: {
    marginTop: `${theme.spacing(10)}px!important`,
    marginBottom: theme.spacing(5),
  },
  contributeBox: {
    marginTop: theme.spacing(0.7),
  },
  lastUpdateBox: {
    marginBottom: theme.spacing(1),
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
  LAST_UPDATE: {
    'it': 'Ultimo aggiornamento: ',
    'en': 'Last update: ',
  },
}

export default function Footer({buildTime}) {
  const classes = useFooterStyles()
  const [language] = useLanguage()

  return (
    <Typography className={classes.copyrightBox} component={'div'} variant="body2" color="textSecondary" align="center">
      <Box className={classes.lastUpdateBox} fontWeight="fontWeightBold">
        {i18n.LAST_UPDATE[language]}
        {`${new Date(buildTime).toLocaleDateString()} ${new Date(buildTime).toLocaleTimeString()}`}
      </Box>

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
    </Typography>
  )
}
