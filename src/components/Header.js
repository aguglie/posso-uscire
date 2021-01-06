import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  subTitle: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(1),
  },
}))

export default function Header() {
  const classes = useStyles()
  return (
    <>
      <Typography gutterBottom>
        <Box textAlign="center" fontSize="h3.fontSize" fontFamily="Roboto" m={1}>
          Posso uscire ?
        </Box>
      </Typography>

      <Typography className={classes.subTitle} color="textPrimary">
        <Box textAlign="left" fontSize={20}>
             Inserisci la tua provincia per conoscere le restrizioni.
        </Box>
      </Typography>
    </>
  )
}
