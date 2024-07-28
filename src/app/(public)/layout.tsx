import React from 'react';
import AlertGlobal from '@/components/AlertGlobal';
import { Drawer } from '@/components/Drawer';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Drawer />
      {children}
      <AlertGlobal />
    </section>
  );
}
