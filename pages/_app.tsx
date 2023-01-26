import MainLayout from '../src/components/layouts/main-layouts';
import '../styles/globals.css';
import '../styles/general.sass';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
