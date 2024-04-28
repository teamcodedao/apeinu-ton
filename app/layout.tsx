import type {Metadata} from 'next';
import {Baloo_Da_2} from 'next/font/google';
import './globals.css';

const balooDa = Baloo_Da_2({
  subsets: ['latin'],
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
      <body className={balooDa.className}>{children}</body>
    </html>
  );
}
