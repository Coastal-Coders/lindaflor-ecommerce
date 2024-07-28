'use client';

import { useEffect } from 'react';
import { ErrorLayout } from '@/components';

export default function Error({
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
    <ErrorLayout
      error={error}
      reset={reset}
    />
  );
}
