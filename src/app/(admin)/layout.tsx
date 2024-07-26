import React from 'react';
import { Metadata } from 'next';
import AlertGlobal from '@/components/AlertGlobal';
import { Drawer } from '@/components/Drawer';
import { AlertProvider } from '@/utils/AlertProvider/AlertProvider';
import { ThemeProvider } from '@/utils/theme/theme-provider';

export const metadata: Metadata = {
  title: 'LindaFlor',
  description: 'Ecommerce',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='pt-BR'
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          themes={['light', 'dark']}
        >
          <AlertProvider>
            <Drawer />
            <main className='bg-secondary'>{children}</main>
            <AlertGlobal />
          </AlertProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
