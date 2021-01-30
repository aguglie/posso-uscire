import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { LanguageProvider } from "../components/LanguageProvider";
import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "../components/theme";
import { useStyles } from "../components/Layout";
import Header from "../components/Header";

function makeTitle(province) {
  if (!province) {
    return "Posso uscire di casa?";
  }
  return "Posso uscire da " + province.nome + "?";
}

function App({ Component, pageProps }: AppProps) {
  const classes = useStyles();
  const pageTitle = makeTitle(pageProps?.province);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Informazioni sulle restrizioni COVID. Inserisci la tua provincia per sapere facilmente le restrizioni vigenti."
        />
        <meta property="og:url" content="https://possouscire.casa/" />
        <meta property="og:image" content="/italyIcon.png" />
        <meta property="og:title" content="Posso Uscire?" />
        <meta
          property="og:description"
          content="Informazioni sulle restrizioni COVID. Inserisci la tua provincia per sapere facilmente le restrizioni vigenti."
        />

        <link rel="manifest" href="/manifest.json" />

        <title>{pageTitle}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <main>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LanguageProvider>
            <Container maxWidth="sm" className={classes.container}>
              <Header province={pageProps.province} />
              <Component {...pageProps} />
            </Container>
          </LanguageProvider>
        </ThemeProvider>
      </main>
    </>
  );
}

export default App;
