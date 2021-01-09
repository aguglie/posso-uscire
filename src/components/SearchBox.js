import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Autocomplete from '@material-ui/lab/Autocomplete'
import React, { useState } from 'react'
import regions from '../lib/italianRegions'
import urlUtils from '../lib/urlUtils'
import ActiveRulesList from './ActiveRulesList'
import { withLanguage } from './LanguageProvider'

const i18n = {
  CITY: {
    'it': 'Provincia',
    'en': 'City',
  },
  CHANGE_LANGUAGE: {
    'it': 'Cambia provincia',
    'en': 'Change city',
  },
}

export default function SearchBox() {
  const [choosenRegion, setRegion] = useState()
  const [language] = withLanguage()


  const onRegionChoosen = (region) => {
    setRegion(region)
    urlUtils.setHash(region?.nome || '')
  }

  urlUtils.hashConsumer((hash) => {
    const foundRegion = regions.find(
      region => urlUtils.prettify(region.nome.trim()).toUpperCase() === hash.toUpperCase().trim()
    )
    if (foundRegion) {
      setRegion(foundRegion)
    }
  })

  return (
    <>
      {!choosenRegion
        ? <Box display="flex" justifyContent="center">
          <Autocomplete
            id="province"
            onChange={(_, value) => onRegionChoosen(value)}
            options={regions}
            getOptionLabel={(option) => option.nome}
            style={{ width: '80%', marginTop: 20 }}
            renderInput={(params) => <TextField {...params} label={i18n.CITY[language]} variant="outlined"/>}
          />
        </Box>
        : <Typography color="textPrimary" fontFamily="Roboto" >
          <Box textAlign="left" fontSize={15}>
            <Link onClick={() => onRegionChoosen(null)}>
              {i18n.CHANGE_LANGUAGE[language]}
            </Link>
          </Box>
          <Box textAlign="center" fontSize="h4.fontSize">
          📍 {choosenRegion.nome}
          </Box>
        </Typography>
      }

      { choosenRegion && <ActiveRulesList province={choosenRegion}/>}
    </>
  )
}
