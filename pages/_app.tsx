import "../styles/globals.css";
import { StylesProvider } from "@mui/styles";
import { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Component {...pageProps} />
    </StylesProvider>
  );
}

export default MyApp;
