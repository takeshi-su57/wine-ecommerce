import { AppProvider } from 'contexts/AppProvider';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
        <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
