import { Inter } from 'next/font/google'
import clsx from 'clsx'

import "./globals.css";
import type { Metadata } from "next";

import NavBar from "./components/navbar";
import { UserProvider } from './context/usercontext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "TradeHub",
  description: "Trade Smart, Stay Informed, Lead the Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx('h-full bg-gray-50 antialiased', inter.variable)}>
      <body className={inter.className}>
        <UserProvider>
        <NavBar />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
        </div>
        </UserProvider>
      </body>
    </html>
  );
}
