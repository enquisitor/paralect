import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';

import { QueryProvider } from '@/components/providers/query-provider';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

const outfit = Outfit({ subsets: ['latin'] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={outfit.className}>
        <QueryProvider>
          <ReactQueryDevtools />
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
