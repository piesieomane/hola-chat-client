import MainLayout from '../src/components/layouts/main-layouts';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../config/theme';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../config/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
