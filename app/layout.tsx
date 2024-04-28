import type {Metadata} from 'next';
import localFont from 'next/font/local';
import {Baloo_2, Baloo_Da_2} from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

const baloo = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo',
  display: 'swap',
});

const balooDa = Baloo_Da_2({
  subsets: ['latin'],
});

const boldieSlab = localFont({
  src: './Boldie_Slab.otf',
  variable: '--font-boldie-slab',
  display: 'swap',
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
      <body
        className={clsx(balooDa.className, baloo.variable, boldieSlab.variable)}
      >
        {children}
      </body>
    </html>
  );
}
