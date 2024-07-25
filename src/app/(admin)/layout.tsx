import React from 'react';
import { Drawer } from '@/components/Drawer';
import { Footer } from '@/components/Footer';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Drawer />
      {children}
      <Footer />
    </section>
  );
}
