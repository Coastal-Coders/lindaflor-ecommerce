import React from 'react';
import AlertGlobal from '@/components/AlertGlobal';
import { Drawer } from '@/components/Drawer';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Drawer />
      <section>{children}</section>
      <AlertGlobal />
    </>
  );
}
