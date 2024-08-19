import React from 'react';
import { redirect } from 'next/navigation';
import { getSession } from 'next-auth/react';
import AlertGlobal from '@/components/AlertGlobal';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  if (session) {
    redirect('/');
    return null;
  }
  return (
    <>
      <Navbar />
      <section>{children}</section>
      <AlertGlobal />
      <Footer />
    </>
  );
}
