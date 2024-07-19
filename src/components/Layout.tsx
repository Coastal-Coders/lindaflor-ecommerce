'use client';
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Drawer } from './Drawer';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');
  return (
    <>
      {isAdmin ? <Drawer /> : <Navbar />}
      <main className={`min-h-screen ${isAdmin ? 'bg-secondary' : 'bg-background'}`}>
        {children}
      </main>
      {isAdmin ? '' : <Footer />}
    </>
  );
};

export default Layout;
