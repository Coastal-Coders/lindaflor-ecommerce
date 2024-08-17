'use client';
import React, { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { queryClient } from '@/lib/queryClient';

const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children} </QueryClientProvider>
    </SessionProvider>
  );
};

export default ClientProviders;
