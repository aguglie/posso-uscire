import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Autocomplete from '@material-ui/lab/Autocomplete'
import React, { useState } from 'react'
import province from '../lib/province'
import ActiveRulesList from './ActiveRulesList'

export default function SearchBox() {
  const [choosenProvince, setProvince] = useState()

  return (
    <>
      {!choosenProvince
        ? <Box display="flex" justifyContent="center">
          <Autocomplete
            id="province"
            onChange={(_, value) => setProvince(value)}
            options={province}
            getOptionLabel={(option) => option.nome}
            style={{ width: '80%', marginTop: 20 }}
            renderInput={(params) => <TextField {...params} label="Provincia" variant="outlined"/>}
          />
        </Box>
        : <Typography color="textPrimary" fontFamily="Roboto" >
          <Box textAlign="left" fontSize={15}>
            <Link onClick={() => setProvince(null)}>
              Cambia città
            </Link>
          </Box>
          <Box textAlign="center" fontSize="h4.fontSize">
          📍 {choosenProvince.nome}
          </Box>
        </Typography>
      }

      { choosenProvince && <ActiveRulesList province={choosenProvince}/>}

    </>
  )
}
