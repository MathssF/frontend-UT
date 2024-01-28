import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    // Redirecionamento automático para "/popular"
    router.push('/popular');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
