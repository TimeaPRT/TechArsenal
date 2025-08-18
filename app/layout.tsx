import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'PremiumHomes - Luxury Real Estate Platform',
  description:
    'Discover your dream home with our premium real estate platform. Browse luxury properties, condos, and homes with advanced filtering and map integration.',
  keywords:
    'real estate, luxury homes, property listings, buy house, sell house, real estate agent',
  authors: [{ name: 'PremiumHomes' }],
  openGraph: {
    title: 'PremiumHomes - Luxury Real Estate Platform',
    description:
      'Discover your dream home with our premium real estate platform.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
