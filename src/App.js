import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Container from '@material-ui/core/Container'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBox from './components/SearchBox'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
  },
}))

export default function App() {
  const classes = useStyles()
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Header />
      <SearchBox/>
      <Footer />
    </Container>
  )
}
