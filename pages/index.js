import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/popular');
  }, []);

  return null; // ou qualquer componente de carregamento que deseje exibir enquanto redireciona
}