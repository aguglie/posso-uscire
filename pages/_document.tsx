import React from 'react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends NextDocument {
  static async getInitialProps(ctx) {
    const materialUiSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          materialUiSheets.collect(<App {...props} />),
      });
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        <React.Fragment key="styles">
          {materialUiSheets.getStyleElement()}
          {initialProps.styles}
        </React.Fragment>,
      ],
    };
  }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
