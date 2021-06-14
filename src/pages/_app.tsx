import "@styles/globals.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "ui/themes/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>e-diaristas</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2? family = Poppins:família = Poppins: ital, wght @ 0,100; 0,200; 0,300; 0,400; 0,500; 0,600; 0,700; 0,800; 0,900; 1.100; 1.200; 1.300; 1.400; 1.500; 1.600; 1.700; 1.800; 1.900 & wght @ 100 & display = swap"
          rel="stylesheet"
        />
        <link href="/fonts/tw-icons/css/treinaweb-icons.css" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
