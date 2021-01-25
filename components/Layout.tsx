import {
  Container,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LanguageProvider } from "./LanguageProvider";
import theme from "./theme";
import PropTypes from "prop-types";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
  },
}));

export default function Layout({ children, buildTime }) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <Container maxWidth="sm" className={classes.container}>
          <Header />
          {children}
          <Footer buildTime={buildTime} />
        </Container>
      </LanguageProvider>
    </ThemeProvider>
  );
}
Layout.propTypes = {
  children: PropTypes.element,
  buildTime: PropTypes.number,
};
