import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Header from './components/Header'
import Copyright from './components/Copyright'
import SearchBox from './components/SearchBox'

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Header />
        <SearchBox/>
        <Copyright />
      </Box>
    </Container>
  )
}
