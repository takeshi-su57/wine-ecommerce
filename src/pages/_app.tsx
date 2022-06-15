import GlobalStyle from 'styles/GlobalStyle';
import { AppProvider } from 'contexts/AppProvider';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wine E-commerce</title>
        <meta name="description" content="Application e-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle />
      <AppProvider>
          <Component {...pageProps} />
      </AppProvider>
    </>
  );
};

export default MyApp;
