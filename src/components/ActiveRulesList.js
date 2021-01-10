import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { getActiveRules } from '../rules'
import { withLanguage } from './LanguageProvider'

const useStyles = makeStyles((theme) => ({
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
    'it': 'Da',
    'en': 'From',
  },
  TO: {
    'it': 'al',
    'en': 'to',
  },
  MORE_INFO: {
    'it': 'Scopri di più',
    'en': 'More',
  },
  NO_RESULTS: {
    'it': 'Nessun risultato trovato',
    'en': 'Nothing was found',
  },
}

function parseDate(date) {
  return new Date(date).toLocaleDateString()
}

function getLocalizedValue(elem) {
  const [language] = withLanguage()
  if (typeof elem === 'string') {
    return elem
  }
  return elem[language]
}

function Rule({ rule }) {
  const [showMoreDetails, setShowMoreDetails] = useState(false)
  const [language] = withLanguage()
  const classes = useStyles()

  const { from, to, details, moreDetails } = rule

  const dateFromTo = [(from ? `${i18n.FROM[language]} ${parseDate(from)}` : ''), (to ? `${i18n.TO[language]} ${parseDate(to)}` : '')].join(' ')

  return (
    <Card className={classes.cardRoot} variant="outlined">
      <CardContent>
        {dateFromTo && <Typography className={classes.dateFromTo} color="textPrimary" gutterBottom>
          📆 {dateFromTo}
        </Typography>
        }
        {rule.name && <Typography variant="h5" component="h2">
          {getLocalizedValue(rule.name)}
        </Typography>
        }

        {details && <Typography color="textPrimary" className={classes.rulesList}>
          <List component="nav" dense={true}>
            {[...details, ...(showMoreDetails ? moreDetails : [])].map(detail =>
              <ListItem button key={detail}>
                <ListItemText
                  classes={{ primary: classes.rule }}
                  primary={getLocalizedValue(detail)}
                />
              </ListItem>)
            }
          </List>
        </Typography>
        }
      </CardContent>
      {!showMoreDetails && moreDetails && <CardActions classes={{ root: classes.cardActions }}>
        <Button size="medium" color="primary" variant="outlined" onClick={() => setShowMoreDetails(true)}>
          {i18n.MORE_INFO[language]}
        </Button>
      </CardActions>
      }
    </Card>
  )
}
Rule.propTypes = {
  rule: PropTypes.object,
}


export default function ActiveRulesList({ province }) {
  const classes = useStyles()
  const activeRules = getActiveRules(province)
  const [language] = withLanguage()

  return (
    <Typography variant="body2" color="textPrimary" className={classes.copyrightBox} >
      {activeRules.length === 0
        ? <Box textAlign="center" fontSize={20} color={'red'}>
          {i18n.NO_RESULTS[language]}
        </Box>
        : activeRules.map(rule => <Rule key={`${province.nome}-${rule.from}-${rule.to}`} rule={rule}/>)}
    </Typography>
  )
}
ActiveRulesList.propTypes = {
  province: PropTypes.object,
}
