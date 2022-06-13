import BaseLayout from 'components/layout/Base';
import { AppProvider } from 'contexts/AppProvider';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Head>
        <title>Wine E-commerce</title>
        <meta name="description" content="Application e-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppProvider>
          <Component {...pageProps} />
      </AppProvider>
    </BaseLayout>
  );
};

export default MyApp;
