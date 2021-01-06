import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Header from './components/Header'
import Disclaimer from './components/Disclaimer'
import SearchBox from './components/SearchBox'

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Header />
        <SearchBox/>
        <Disclaimer />
      </Box>
    </Container>
  )
}
