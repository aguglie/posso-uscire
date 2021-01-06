import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import PropTypes from 'prop-types'
import { getActiveRules } from '../rules'

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
}))

function parseDate(date) {
  return new Date(date).toLocaleDateString()
}

function Rule({ rule }) {
  const classes = useStyles()
  const { from, to, details } = rule

  const dateFromTo = [(from ? `Dal ${parseDate(from)}` : ''), (to ? `Al ${parseDate(to)}` : '')].join(' ')

  return (
    <Card className={classes.cardRoot} variant="outlined">
      <CardContent>
        {dateFromTo && <Typography className={classes.dateFromTo} color="textSecondary" gutterBottom>
          📆 {dateFromTo}
        </Typography>
        }
        {rule.name && <Typography variant="h5" component="h2">
          {rule.name}
        </Typography>
        }

        {details && <Typography color="textPrimary" className={classes.rulesList}>
          <List component="nav" dense={true}>
            {details.map(detail =>
              <ListItem button key={detail}>
                <ListItemText
                  classes={{ primary: classes.rule }}
                  primary={detail}
                />
              </ListItem>)
            }
          </List>
        </Typography>
        }
      </CardContent>
    </Card>
  )
}
Rule.propTypes = {
  rule: PropTypes.object,
}


export default function ActiveRulesList({ province }) {
  const classes = useStyles()
  const activeRules = getActiveRules(province)
  return (
    <Typography variant="body2" color="textPrimary" className={classes.copyrightBox} >
      {activeRules.map(rule => <Rule key={province.nome + rule.from} rule={rule}/>)}
    </Typography>
  )
}
ActiveRulesList.propTypes = {
  province: PropTypes.object,
}
