import type { Metadata } from 'next';
import React from 'react';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
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
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
