import React from 'react';
import AlertGlobal from '@/components/AlertGlobal';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <section>{children}</section>
      <AlertGlobal />
      <Footer />
    </>
  );
}
