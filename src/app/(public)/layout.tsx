'use client';
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import AlertGlobal from '@/components/AlertGlobal';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { queryClient } from '@/lib/queryClient';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <section>{children}</section>
      </QueryClientProvider>
      <AlertGlobal />
      <Footer />
    </>
  );
}
