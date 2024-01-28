import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/popular');
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}

export default MyApp;
