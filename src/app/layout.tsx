import { Archivo_Black, Space_Grotesk, Modak } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-head',
  display: 'swap',
});

const space = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const modak = Modak({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-modak',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(archivoBlack.variable, space.variable, modak.variable)}
      >
        {children}
      </body>
    </html>
  );
}
