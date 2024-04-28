import type {Metadata} from 'next';
import localFont from 'next/font/local';
import {Baloo_Da_2} from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

const balooDa = Baloo_Da_2({
  subsets: ['latin'],
});

const boldieSlab = localFont({
  src: './Boldie_Slab.otf',
  variable: '--font-boldie-slab',
});

export const metadata: Metadata = {
  title: 'Apeinu',
  description: 'Apeinu',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(balooDa.className, boldieSlab.variable)}>
        {children}
      </body>
    </html>
  );
}
