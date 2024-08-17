import React from 'react';
import type { Metadata } from 'next';
import { AlertProvider } from '@/utils/AlertProvider/AlertProvider';
import { CartProvider } from '@/utils/CartProvider/CartProvider';
import ClientProviders from '@/utils/SessionProvider/SessionProvider';
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
            <CartProvider>
              <ClientProviders>
                <main>{children}</main>
              </ClientProviders>
            </CartProvider>
          </AlertProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
