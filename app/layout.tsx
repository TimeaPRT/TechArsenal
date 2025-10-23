import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Elite Aesthetics - Luxury Plastic Surgery & Aesthetic Treatments',
  description:
    'Transform your natural beauty with board-certified plastic surgeons at Elite Aesthetics. Specializing in facial procedures, breast enhancement, body contouring, and non-surgical treatments in Beverly Hills.',
  keywords:
    'plastic surgery, cosmetic surgery, Beverly Hills, facial procedures, breast augmentation, tummy tuck, rhinoplasty, botox, dermal fillers',
  authors: [{ name: 'Elite Aesthetics' }],
  openGraph: {
    title: 'Elite Aesthetics - Luxury Plastic Surgery',
    description:
      'Board-certified plastic surgeons delivering natural, beautiful results with 20+ years of experience.',
    url: 'https://eliteaesthetics.com',
    siteName: 'Elite Aesthetics',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Aesthetics - Luxury Plastic Surgery',
    description: 'Transform your natural beauty with expert plastic surgeons.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ✅ Move viewport to a separate export:
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
