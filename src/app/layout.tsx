import React from 'react';
import type { Metadata } from 'next';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
//import { ThemeProvider } from '@/utils/theme/theme-provider';
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
        {/* <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          themes={['light', 'dark']}
        > */}
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
