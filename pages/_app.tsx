import MainLayout from '../src/components/layouts/main-layouts';
import '../styles/globals.css';
import '../styles/general.sass';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
