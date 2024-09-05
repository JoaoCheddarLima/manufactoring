import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import MainTopNav from './components/nav/page';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = Inter({
  subsets: ['latin'],
  weight: '600',
})

export const metadata: Metadata = {
  title: "Manufactoring Dashboard",
  description: "Summarized and aggregated data for the manufactoring industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased text-black h-screen`}
      >
        <MainTopNav />
        {children}
      </body>
    </html>
  );
}
