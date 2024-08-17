'use client';
import React from 'react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import AlertGlobal from '@/components/AlertGlobal';
import { Drawer } from '@/components/Drawer';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  if (!session) {
    redirect('/');
  }
  return (
    <>
      <Drawer />
      <section>{children}</section>
      <AlertGlobal />
    </>
  );
}
