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
  return (
    <>
      {children}
      <Footer buildTime={buildTime} />
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.element,
  buildTime: PropTypes.number,
};
