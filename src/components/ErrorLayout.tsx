'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/Button';

export default function ErrorLayout({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex min-h-dvh flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-md text-center'>
        <AlertCircle className='mx-auto size-12 text-primary' />
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
          Oops, {error.message || 'Algo deu errado'}
        </h1>
        <p className='mt-4 text-base font-normal text-muted-foreground'>
          Desculpe, mas ocorreu um erro inesperado. Por favor, tente novamente mais tarde ou contate
        </p>
        <div className='mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center'>
          <Button variant='outline'>
            <Link
              href='/'
              prefetch={false}
            >
              Pagina inicial
            </Link>
          </Button>
          <Button>
            <Link
              href='#'
              prefetch={false}
              onClick={reset}
            >
              Tentar novamente
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
