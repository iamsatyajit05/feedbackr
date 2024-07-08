import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from 'next';
import { Inter, Gabarito } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const gabarito = Gabarito({ subsets: ['latin'], variable: '--font-gabarito' });

export const metadata: Metadata = {
  title: 'Feedbackr',
  description: 'Simplify feedback collection for your app with Feedbackr. Spend less time managing and more time growing your app.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${gabarito.variable} ${inter.variable} font-inter !scroll-smooth`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
