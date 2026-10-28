import type { Metadata } from 'next';
import { Bricolage_Grotesque, Instrument_Serif } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Leafy Bowl · Fresh salad bowls in Vallabh Vidyanagar',
  description:
    '100% veg, protein-packed salads made the moment you order. Order on WhatsApp in Vallabh Vidyanagar, Anand.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
