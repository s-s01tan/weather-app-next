import Head from "next/head";
import "../styles/bootstrap.min.css";
import "../styles/common.scss";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Weather Application</title>
        <link rel="icon" href="https://s-s01tan.github.io/weather-app-next/image/logo.svg"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
