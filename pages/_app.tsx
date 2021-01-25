import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

function App({ Component, pageProps }: AppProps) {
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

        <title>Posso uscire di casa?</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
