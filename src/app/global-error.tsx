'use client';

import { useEffect } from 'react';
import { ErrorLayout } from '@/components';

export default function GlobalError({
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
    <html lang='pt-br'>
      <body>
        <ErrorLayout
          error={error}
          reset={reset}
        />
      </body>
    </html>
  );
}
