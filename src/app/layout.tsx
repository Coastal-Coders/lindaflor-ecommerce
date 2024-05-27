import type { Metadata } from 'next';

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
        <ThemeProvider attribute='class'>{children}</ThemeProvider>
      </body>
    </html>
  );
}
