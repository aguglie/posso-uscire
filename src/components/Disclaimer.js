import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  copyrightBox: {
    marginTop: theme.spacing(10),
  },
  contributeBox: {
    marginTop: theme.spacing(0.4),
  },
}))

export default function Disclaimer() {
  const classes = useStyles()
  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.copyrightBox} >
      <Box>
        Le informazioni fornite potrebbero essere incomplete o non corrette.
      </Box>
      <Box>
        Attenersi sempre a fonti governative ufficiali.
      </Box>

      <Box className={classes.contributeBox}>
        <Link href="http://github.com/Guglio95/posso-uscire">
          Contribuisci al progetto su Github
        </Link>
      </Box>
    </Typography>
  )
}
