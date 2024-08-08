'use client';
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import AlertGlobal from '@/components/AlertGlobal';
import { Drawer } from '@/components/Drawer';
import { queryClient } from '@/lib/queryClient';

//const queryClient = new QueryClient();
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Drawer />
      <QueryClientProvider client={queryClient}>
        <section>{children}</section>
      </QueryClientProvider>
      <AlertGlobal />
    </>
  );
}
