import React from 'react';
import type { Metadata } from 'next';
import { AlertProvider } from '@/utils/AlertProvider/AlertProvider';
import { ThemeProvider } from '@/utils/theme/theme-provider';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'LindaFlor',
  description: 'Ecommerce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            <main>{children}</main>
          </AlertProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
