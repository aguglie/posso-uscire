import {
  Box,
  Button,
  Link as MatLink,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography
} from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from './LanguageProvider'

export const useStyles = makeStyles((theme) => ({
  copyrightBox: {
    marginTop: theme.spacing(4),
  },
  contributeBox: {
    marginTop: theme.spacing(0.4),
  },
  cardRoot: {
    marginBottom: theme.spacing(2),
  },
  dateFromTo: {
    fontSize: 18,
  },
  rulesList: {
    marginTop: 4,
  },
  rule: {
    fontSize: 17,
  },
  cardActions: {
    justifyContent: 'center',
    marginBottom: 10,
  },
}))

const i18n = {
  FROM: {
    it: 'Da',
    en: 'From',
  },
  TO: {
    it: 'al',
    en: 'to',
  },
  MORE_INFO: {
    it: 'Scopri di più',
    en: 'More',
  },
  NO_RESULTS: {
    it: 'Nessun risultato trovato',
    en: 'Nothing was found',
  },
  CHANGE_PROVINCE: {
    it: 'Cambia provincia',
    en: 'Change city',
  },
}

function parseDate(date) {
  return new Date(date).toLocaleDateString()
}

function getLocalizedValue(elem) {
  const [language] = useLanguage()
  if (typeof elem === 'string') {
    return elem
  }
  return elem[language]
}

function Rule({ rule }) {
  const [showMoreDetails, setShowMoreDetails] = useState(false)
  const [language] = useLanguage()
  const classes = useStyles()

  const { from, to, details, moreDetails } = rule

  const dateFromTo = [
    from ? `${i18n.FROM[language]} ${parseDate(from)}` : '',
    to ? `${i18n.TO[language]} ${parseDate(to)}` : '',
  ].join(' ')

  return (
    <Card className={classes.cardRoot} variant="outlined">
      <CardContent>
        {dateFromTo && (
          <Typography
            component={'div'}
            className={classes.dateFromTo}
            color="textPrimary"
            gutterBottom
          >
            📆 {dateFromTo}
          </Typography>
        )}
        {rule.name && (
          <Typography variant="h5" component="h2">
            {getLocalizedValue(rule.name)}
          </Typography>
        )}

        {details && (
          <Typography component={'div'} color="textPrimary" className={classes.rulesList}>
            <List component="nav" dense={true}>
              {[...details, ...(showMoreDetails ? moreDetails : [])].map(
                (detail, index) => (
                  <ListItem button key={index}>
                    <ListItemText
                      classes={{ primary: classes.rule }}
                      primary={getLocalizedValue(detail)}
                    />
                  </ListItem>
                )
              )}
            </List>
          </Typography>
        )}
      </CardContent>
      {!showMoreDetails && moreDetails && (
        <CardActions classes={{ root: classes.cardActions }}>
          <Button
            size="medium"
            color="primary"
            variant="outlined"
            onClick={() => setShowMoreDetails(true)}
          >
            {i18n.MORE_INFO[language]}
          </Button>
        </CardActions>
      )}
    </Card>
  )
}
Rule.propTypes = {
  rule: PropTypes.object,
}


export default function ActiveRulesList({ rules, province }) {
  const classes = useStyles()
  const [language] = useLanguage()
  return (
    <>
      <Typography component={'div'} color="textPrimary">
        <Box textAlign="left" fontSize={15}>
          <Link href="/">
            <MatLink href="/">{i18n.CHANGE_PROVINCE[language]}</MatLink>
          </Link>
        </Box>
        <Box textAlign="center" fontSize="h4.fontSize">
          📍 {province.nome}
        </Box>
      </Typography>
      <Typography
        component={'div'}
        variant="body2"
        color="textPrimary"
        className={classes.copyrightBox}
      >
        {rules.length === 0 ? (
          <Box textAlign="center" fontSize={20} color={'red'}>
            {i18n.NO_RESULTS[language]}
          </Box>
        ) : (
          rules.map((rule) => (
            <Rule
              key={`${province.nome}-${rule.from}-${rule.to}`}
              rule={rule}
            />
          ))
        )}
      </Typography>
    </>
  )
}
ActiveRulesList.propTypes = {
  rules:PropTypes.array,
  province: PropTypes.object,
}
