import React from 'react';
import { redirect } from 'next/navigation';
import AlertGlobal from '@/components/AlertGlobal';
import { Drawer } from '@/components/Drawer';
import { getSession } from '@/lib/session';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  if (!session) {
    redirect('/');
    return null;
  }
  return (
    <>
      <Drawer />
      <section>{children}</section>
      <AlertGlobal />
    </>
  );
}
