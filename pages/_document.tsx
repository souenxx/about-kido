import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets as MaterialUIStyleSheets } from "@mui/styles";
import { ServerStyleSheet as StyledComponentsStyleSheets } from "styled-components";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const materialUISheets = new MaterialUIStyleSheets();
  const styledComponentsSheets = new StyledComponentsStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentsSheets.collectStyles(
            materialUISheets.collect(<App {...props} />)
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styledComponentsSheets.getStyleElement()}
        </>
      ),
    };
  } finally {
    styledComponentsSheets.seal();
  }
};
